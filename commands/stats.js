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
        let topCommands = [];
        
        if (data.messageCount) {
            // Sum all command counts
            Object.values(data.messageCount).forEach(userData => {
                if (userData.commands) {
                    Object.values(userData.commands).forEach(count => {
                        totalCommands += count;
                    });
                }
            });

            // Get top 5 commands
            const commandCounts = {};
            Object.values(data.messageCount).forEach(userData => {
                if (userData.commands) {
                    Object.entries(userData.commands).forEach(([cmd, count]) => {
                        commandCounts[cmd] = (commandCounts[cmd] || 0) + count;
                    });
                }
            });

            topCommands = Object.entries(commandCounts)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 5)
                .map(([cmd, count]) => `${cmd}: ${count}`);
        }

        const statsMessage = `⚡ *UMAROCK BOT STATS* ⚡

📊 *Total Commands Used:* ${totalCommands}
🌐 *Bot Mode:* ${data.isPublic ? 'Public' : 'Private'}
📈 *Version:* ${settings.version}

🏆 *Top 5 Commands:*
${topCommands.length > 0 ? topCommands.map(cmd => `• ${cmd}`).join('\n') : '• No commands used yet'}

⚡ *Powered by UmaRock Bot*`;

        await sock.sendMessage(chatId, {
            text: statsMessage,
            contextInfo: {
                forwardingScore: 1,
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
            text: '❌ Error retrieving stats data!',
            contextInfo: {
                forwardingScore: 1,
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