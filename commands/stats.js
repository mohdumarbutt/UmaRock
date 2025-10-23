const fs = require('fs');
const path = require('path');
const { isSudo } = require('../lib/index');

const DATA_PATH = path.join(__dirname, '..', 'data', 'messageCount.json');

function safeLoad() {
  try {
    if (!fs.existsSync(DATA_PATH)) {
      return { isPublic: true, messageCount: {}, commandUsage: {} };
    }
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    const parsed = JSON.parse(raw || '{}');
    if (typeof parsed.isPublic !== 'boolean') parsed.isPublic = true;
    if (!parsed.messageCount || typeof parsed.messageCount !== 'object') parsed.messageCount = {};
    if (!parsed.commandUsage || typeof parsed.commandUsage !== 'object') parsed.commandUsage = {};
    return parsed;
  } catch {
    return { isPublic: true, messageCount: {}, commandUsage: {} };
  }
}

function safeSave(data) {
  const tmp = DATA_PATH + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
  fs.renameSync(tmp, DATA_PATH);
}

function incrementCommandUsage(command) {
  const data = safeLoad();
  data.commandUsage[command] = (data.commandUsage[command] || 0) + 1;
  safeSave(data);
}

async function statsCommand(sock, chatId, message) {
  const senderId = message.key.participant || message.key.remoteJid;
  const senderIsSudo = await isSudo(senderId);
  if (!message.key.fromMe && !senderIsSudo) {
    await sock.sendMessage(chatId, { text: '❌ Admin only: .stats' }, { quoted: message });
    return;
  }
  const data = safeLoad();
  const total = Object.values(data.commandUsage).reduce((a, b) => a + b, 0);
  const top = Object.entries(data.commandUsage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  let lines = [
    '⚡ UMAᖇOCK BOT — STATS ⚡',
    '━━━━━━━━━━━━━━━━━━━━━━',
    `Total commands used: ${total}`,
    '',
    'Top 5 commands:'
  ];
  if (top.length === 0) {
    lines.push('(no usage yet)');
  } else {
    top.forEach(([cmd, count], idx) => {
      lines.push(`${idx + 1}. ${cmd} — ${count}`);
    });
  }
  await sock.sendMessage(chatId, { text: lines.join('\n') }, { quoted: message });
}

module.exports = { statsCommand, incrementCommandUsage };
