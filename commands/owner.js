const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${settings.botOwner}
TEL;waid=${settings.ownerNumber}:${settings.ownerNumber}
END:VCARD
`;

    const ownerInfo = `⚡ *UMAROCK BOT OWNER* ⚡

👤 *Name:* ${settings.botOwner}
📱 *WhatsApp:* ${settings.ownerNumber}
🌐 *GitHub:* https://github.com/mohdumarbutt
📺 *YouTube:* https://www.youtube.com/@mohdumarbutt_official
📷 *Instagram:* https://www.instagram.com/theumar_butt
📘 *Facebook:* https://www.facebook.com/MohdUmarButtOfficial
📢 *Channel:* https://whatsapp.com/channel/0029Vb6vgNd5PO0wMurhKp01
📱 *Telegram:* https://t.me/UmaRock

💻 *Built by Umar Butt — Full-stack dev (Python, JS, C++)*`;

    await sock.sendMessage(chatId, {
        text: ownerInfo,
        contextInfo: {
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: 'TODO_NEWSLETTER_JID',
                newsletterName: 'UmaRock',
                serverMessageId: -1
            }
        }
    });

    await sock.sendMessage(chatId, {
        contacts: { displayName: settings.botOwner, contacts: [{ vcard }] },
    });
}

module.exports = ownerCommand;
