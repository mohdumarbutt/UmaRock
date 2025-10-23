// TODO: Insert your channel JID here (format: 120363XXXXXXXXX@newsletter)
// To obtain the JID: Send a message to the channel and inspect session pairing logs
exports.newsletterJid = "TODO_NEWSLETTER_JID";
exports.newsletterName = "UmaRock";

const channelInfo = {
    contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: exports.newsletterJid,
            newsletterName: exports.newsletterName,
            serverMessageId: -1
        }
    }
};

module.exports = { channelInfo };