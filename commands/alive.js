const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `⚡ UMAROCK BOT ⚡
━━━━━━━━━━━━━━━━━
STATUS : ONLINE
VERSION: ${settings.version}
OWNER  : Mohd Umar Butt (Umar Butt)
GH     : https://github.com/mohdumarbutt
━━━━━━━━━━━━━━━━━`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: 'TODO_NEWSLETTER_JID',
                    newsletterName: 'UmaRock',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;