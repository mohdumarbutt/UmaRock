// Centralized channel information for forwarded messages
// TODO: Insert your channel JID here (format: 120363XXXXXXXXX@newsletter)
// To obtain: post a message in your WhatsApp Channel from the bot account, then inspect the message context in logs/session to copy the newsletter JID.
const channelInfo = {
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: 'TODO_NEWSLETTER_JID',
      newsletterName: 'UmaRock',
      serverMessageId: -1,
    },
  },
};

module.exports = { channelInfo };