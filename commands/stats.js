const fs = require('fs');
const settings = require('../settings');

async function statsCommand(sock, chatId, message) {
    try {
        // Read message count data
        let data;
        try {
            data = JSON.parse(fs.readFileSync('./data/messageCount.json'));
        } catch (error) {
            data = { messageCount: {}, isPublic: true };
        }

        // Calculate total commands used
        let totalCommands = 0;
        let commandStats = {};
        
        if (data.messageCount) {
            for (const [chatId, userData] of Object.entries(data.messageCount)) {
                if (typeof userData === 'object' && userData.commands) {
                    for (const [command, count] of Object.entries(userData.commands)) {
                        totalCommands += count;
                        commandStats[command] = (commandStats[command] || 0) + count;
                    }
                }
            }
        }

        // Get top 5 commands
        const topCommands = Object.entries(commandStats)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([cmd, count]) => `• ${cmd}: ${count}`)
            .join('\n');

        const statsMessage = `⚡ *UMAROCK BOT STATS* ⚡

📊 *Total Commands Used:* ${totalCommands}
🤖 *Bot Version:* ${settings.version}
🌐 *Mode:* ${data.isPublic ? 'Public' : 'Private'}

🏆 *Top 5 Commands:*
${topCommands || 'No commands used yet'}

⚡ *UmaRock Bot* - Powered by Umar Butt`;

        await sock.sendMessage(chatId, {
            text: statsMessage,
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
        console.error('Error in stats command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error retrieving stats. Please try again later.',
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
    }
}

module.exports = statsCommand;