const settings = require("../settings");
const { channelInfo } = require('../lib/messageConfig');
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = [
            '⚡ UMAROCK BOT ⚡',
            '━━━━━━━━━━━━━━━━━',
            `STATUS : ONLINE`,
            `VERSION: ${settings.version}`,
            `OWNER  : Mohd Umar Butt (Umar Butt)`,
            `GH     : https://github.com/mohdumarbutt`,
            '━━━━━━━━━━━━━━━━━',
            '',
            'Type .menu for full command list'
        ].join('\n');

        await sock.sendMessage(chatId, { text: message1, ...channelInfo }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;