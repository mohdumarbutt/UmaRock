# UmaRock Bot - Customization Report

## 📋 Summary of Changes

This report documents the complete rebranding of Knight Bot MD to UmaRock Bot, preserving all functionality while updating branding, owner information, and adding new features.

## 🔄 Files Modified

### Core Configuration Files
1. **settings.js** - Updated bot name, owner, version, and branding
2. **data/owner.json** - Updated with new owner number
3. **index.js** - Updated header comment, global variables, and startup messages
4. **main.js** - Updated global settings and channel information
5. **package.json** - Updated package name, description, and author

### Command Files
6. **commands/alive.js** - Updated with UmaRock branding and ⚡ theme
7. **commands/owner.js** - Enhanced with social media links and bio
8. **commands/welcome.js** - Updated welcome messages with UmaRock branding
9. **commands/stats.js** - **NEW** - Added statistics command for admins

### Library Files
10. **lib/messageConfig.js** - **REPLACED** - Clean implementation with TODO for newsletter JID

### Documentation
11. **README.md** - **REPLACED** - Complete new documentation
12. **assets/README_add_images.txt** - **NEW** - Asset replacement guide

## 📝 Detailed Changes

### File: settings.js
**Changes (lines 1-16):**
```diff
- packname: 'Knight Bot',
- author: '‎',
- botName: "Knight Bot",
- botOwner: 'Professor',
- ownerNumber: '919876543210',
+ packname: '⚡ UmaRock | AI Bot',
+ author: 'Umar Butt',
+ botName: "UmaRock Bot",
+ botOwner: 'Mohd Umar Butt',
+ ownerNumber: '916006987121',
+ themeEmoji: "⚡",
- version: "2.2.2",
+ version: "1.0.0",
- updateZipUrl: "https://github.com/mruniquehacker/Knightbot-MD/archive/refs/heads/main.zip",
+ updateZipUrl: "https://github.com/mohdumarbutt/UmaRock-Bot/archive/refs/heads/main.zip",
```

### File: data/owner.json
**Changes (line 1):**
```diff
- ["910000000000","917023951514"]
+ ["916006987121"]
```

### File: index.js
**Changes (lines 1-11):**
```diff
- /**
-  * Knight Bot - A WhatsApp Bot
-  * Copyright (c) 2024 Professor
+ /**
+  * UmaRock Bot - A WhatsApp Bot
+  * Modified by Mohd Umar Butt (2025)
+  * Based on Knight Bot MD by Professor (Mr Unique Hacker)
+  * Original: https://github.com/mruniquehacker/Knightbot-MD
+  * Licensed under MIT License
```

**Changes (lines 76-77):**
```diff
- global.botname = "KNIGHT BOT"
- global.themeemoji = "•"
+ global.botname = "UMAROCK BOT"
+ global.themeemoji = "⚡"
```

### File: main.js
**Changes (lines 123-124):**
```diff
- global.channelLink = "https://whatsapp.com/channel/0029Va90zAnIHphOuO8Msp3A";
- global.ytch = "Mr Unique Hacker";
+ global.channelLink = "https://whatsapp.com/channel/0029Vb6vgNd5PO0wMurhKp01";
+ global.ytch = "Mohd Umar Butt";
```

### File: commands/alive.js
**Changes (lines 4-13):**
```diff
- const message1 = `*🤖 Knight Bot is Active!*\n\n` +
-                `*Version:* ${settings.version}\n` +
-                `*Status:* Online\n` +
-                `*Mode:* Public\n\n` +
-                `*🌟 Features:*\n` +
-                `• Group Management\n` +
-                `• Antilink Protection\n` +
-                `• Fun Commands\n` +
-                `• And more!\n\n` +
-                `Type *.menu* for full command list`;
+ const message1 = `⚡ UMAROCK BOT ⚡
+ ━━━━━━━━━━━━━━━━━
+ STATUS : ONLINE
+ VERSION: ${settings.version}
+ OWNER  : Mohd Umar Butt (Umar Butt)
+ GH     : https://github.com/mohdumarbutt
+ ━━━━━━━━━━━━━━━━━`;
```

### File: commands/owner.js
**Changes (lines 1-17):**
```diff
- const settings = require('../settings');
- 
- async function ownerCommand(sock, chatId) {
-     const vcard = `
- BEGIN:VCARD
- VERSION:3.0
- FN:${settings.botOwner}
- TEL;waid=${settings.ownerNumber}:${settings.ownerNumber}
- END:VCARD
- `;
- 
-     await sock.sendMessage(chatId, {
-         contacts: { displayName: settings.botOwner, contacts: [{ vcard }] },
-     });
- }
+ const settings = require('../settings');
+ 
+ async function ownerCommand(sock, chatId) {
+     const ownerInfo = `⚡ *UMAROCK BOT OWNER* ⚡
+ 
+ 👤 *Name:* ${settings.botOwner}
+ 📱 *WhatsApp:* +${settings.ownerNumber}
+ 🌐 *GitHub:* https://github.com/mohdumarbutt
+ 📺 *YouTube:* https://www.youtube.com/@mohdumarbutt_official
+ 📷 *Instagram:* https://www.instagram.com/theumar_butt
+ 📘 *Facebook:* https://www.facebook.com/MohdUmarButtOfficial
+ 
+ 💻 *About:* Built by Umar Butt — Full-stack dev (Python, JS, C++)
+ 
+ ⚡ *UmaRock Bot* - Your AI-powered WhatsApp assistant!`;
+ 
+     const vcard = `
+ BEGIN:VCARD
+ VERSION:3.0
+ FN:${settings.botOwner}
+ TEL;waid=${settings.ownerNumber}:${settings.ownerNumber}
+ URL:https://github.com/mohdumarbutt
+ END:VCARD
+ `;
+ 
+     await sock.sendMessage(chatId, {
+         text: ownerInfo,
+         contextInfo: {
+             forwardingScore: 999,
+             isForwarded: true,
+             forwardedNewsletterMessageInfo: {
+                 newsletterJid: 'TODO_NEWSLETTER_JID',
+                 newsletterName: 'UmaRock',
+                 serverMessageId: -1
+             }
+         }
+     });
+ 
+     await sock.sendMessage(chatId, {
+         contacts: { displayName: settings.botOwner, contacts: [{ vcard }] },
+     });
+ }
```

### File: commands/welcome.js
**Changes (lines 88-89):**
```diff
- caption: `╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @${displayName} 👋\n┃Member count: #${groupMetadata.participants.length}\n┃𝚃𝙸𝙼𝙴: ${timeString}⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@${displayName}* Welcome to *${groupName}*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\n${groupDesc}\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Knight Bot*`,
+ caption: `╔════════════════════════╗
+ ⚡  UMAROCK BOT  ⚡
+ ╚════════════════════════╝
+ 
+ Welcome @${displayName} to ${groupName}!
+ Built by: Umar Butt — Full-stack Developer
+ Use .help to see commands.
+ 
+ Member count: #${groupMetadata.participants.length}
+ Time: ${timeString}`,
```

## 🆕 New Files Created

### File: commands/stats.js
**Full content:**
```javascript
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
```

### File: lib/messageConfig.js
**Full content:**
```javascript
// UmaRock Bot - Newsletter Configuration
// TODO: Insert your channel JID here (format: 120363XXXXXXXXX@newsletter)
// To obtain the JID: Send a message to your WhatsApp channel and inspect session pairing logs
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

module.exports = {
    channelInfo: channelInfo,
    newsletterJid: exports.newsletterJid,
    newsletterName: exports.newsletterName
};
```

### File: assets/README_add_images.txt
**Full content:**
```
# UmaRock Bot - Asset Replacement Guide

## Required Asset Replacements

Replace the following files in the `/assets/` directory with UmaRock-branded versions:

### 1. bot_image.jpg
- **Current**: Generic bot image
- **Replace with**: UmaRock logo
- **Recommended specs**: 512x512 pixels, JPG format
- **Content**: UmaRock logo with ⚡ theme, modern design
- **Usage**: Bot profile picture, help command display

### 2. stickintro.webp
- **Current**: Generic intro sticker
- **Replace with**: UmaRock intro sticker
- **Recommended specs**: WebP format, animated preferred
- **Content**: "⚡ UmaRock Bot" intro animation
- **Usage**: Welcome messages, bot introduction

### 3. sticktag.webp
- **Current**: Generic tag sticker
- **Replace with**: UmaRock tag sticker
- **Recommended specs**: WebP format, animated preferred
- **Content**: "⚡ UmaRock" tag animation
- **Usage**: Tag commands, mentions

## Design Guidelines

- **Theme**: ⚡ Lightning bolt theme
- **Colors**: Electric blue (#00BFFF), white, black
- **Style**: Modern, tech-focused, professional
- **Text**: "UmaRock" or "UmaRock Bot"
- **Logo**: Incorporate ⚡ symbol prominently

## Implementation Notes

- All assets should maintain the same filenames
- Ensure compatibility with WhatsApp sticker requirements
- Test all assets in the bot before deployment
- Consider creating both static and animated versions

## File Locations

```
assets/
├── bot_image.jpg      (512x512, JPG)
├── stickintro.webp    (WebP sticker)
└── sticktag.webp      (WebP sticker)
```
```

## 🔧 Environment Variables Required

The bot requires the following environment variables:

```env
# Required
SESSION_ID=your_session_id

# Optional
MONGO_URI=your_mongodb_connection_string
```

## 📱 How to Obtain Newsletter JID

1. Create a WhatsApp channel
2. Send a message to the channel
3. Check the bot's session logs for the newsletter JID
4. Look for a message containing `120363XXXXXXXXX@newsletter`
5. Copy the complete JID and replace `TODO_NEWSLETTER_JID` in `lib/messageConfig.js`

## 🚀 Local Testing Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Create `.env` file with `SESSION_ID`
   - Update `settings.js` with your details
   - Update `data/owner.json` with your number

3. **Run the bot:**
   ```bash
   npm start
   ```

4. **Test commands:**
   - `.alive` - Check bot status
   - `.owner` - View owner info
   - `.stats` - View statistics (admin only)

## 🌐 Deployment Options

### VPS Deployment
```bash
# Install PM2
npm install -g pm2

# Start bot
pm2 start index.js --name "umarock-bot"

# Auto-restart on system reboot
pm2 startup
pm2 save
```

### Docker Deployment
```bash
# Build image
docker build -t umarock-bot .

# Run container
docker run -e SESSION_ID=$SESSION_ID umarock-bot
```

### Pterodactyl Panel
1. Create Node.js server
2. Upload bot files
3. Set environment variables
4. Start server

## 📋 Branch & Commit Plan

**Branch name:** `umarock/rebrand`

**Proposed commits:**
1. `chore(rebrand): update settings and configuration files`
2. `feat(commands): add owner and stats commands`
3. `docs: update README and documentation`
4. `style: update branding and welcome messages`
5. `refactor: clean up messageConfig and add TODOs`

**Git commands to create branch:**
```bash
git checkout -b umarock/rebrand
git add .
git commit -m "chore(rebrand): update settings and configuration files"
git commit -m "feat(commands): add owner and stats commands"
git commit -m "docs: update README and documentation"
git commit -m "style: update branding and welcome messages"
git commit -m "refactor: clean up messageConfig and add TODOs"
```

## ⚠️ TODOs for Manual Completion

1. **Newsletter JID**: Replace `TODO_NEWSLETTER_JID` in `lib/messageConfig.js`
2. **Asset Replacement**: Replace files in `/assets/` directory
3. **Environment Variables**: Set up `.env` file with required variables
4. **Testing**: Test all commands and features before deployment

## 📊 Next Steps Checklist

- [ ] Replace assets with UmaRock-branded versions
- [ ] Obtain and configure newsletter JID
- [ ] Set up environment variables
- [ ] Test bot functionality locally
- [ ] Deploy to production environment
- [ ] Update any remaining hardcoded references
- [ ] Test all commands and features
- [ ] Monitor bot performance and logs

---

**⚡ UmaRock Bot - Powered by Umar Butt ⚡**