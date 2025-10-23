const settings = require('../settings');

async function ownerCommand(sock, chatId) {
    const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${settings.botOwner}
ORG:UmaRock Bot
TITLE:Full-stack Developer
TEL;waid=${settings.ownerNumber}:${settings.ownerNumber}
URL:https://github.com/mohdumarbutt
END:VCARD
`;

    const text = [
        '⚡ UMAᖇOCK BOT — OWNER ⚡',
        '━━━━━━━━━━━━━━━━━━━━━━',
        `Name   : ${settings.botOwner} (Umar Butt)`,
        `WhatsApp: wa.me/${settings.ownerNumber}`,
        'Instagram: https://www.instagram.com/theumar_butt',
        'Facebook : https://www.facebook.com/MohdUmarButtOfficial',
        'GitHub   : https://github.com/mohdumarbutt',
        'YouTube  : https://www.youtube.com/@mohdumarbutt_official',
        'Telegram : https://t.me/UmaRock',
        'TG Group : https://t.me/+NubNX5aSOI83ZjA1',
        '━━━━━━━━━━━━━━━━━━━━━━',
        'Built by Umar Butt — Full-stack dev (Python, JS, C++).'
    ].join('\n');

    await sock.sendMessage(chatId, {
        contacts: { displayName: settings.botOwner, contacts: [{ vcard }] },
    });

    await sock.sendMessage(chatId, { text });
}

module.exports = ownerCommand;
