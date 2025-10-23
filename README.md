# ⚡ UmaRock Bot

UmaRock Bot is a modern, multi-device WhatsApp bot built on Baileys. It provides powerful group management, media utilities, AI helpers, and fun commands — all with a clean, extensible codebase. This project is a respectful rebrand and customization of the original Knight Bot MD, preserving license and attribution.

## 🛠️ Installation

```bash
git clone <your-fork-or-repo>
cd <repo>
npm install
```

Create a .env file (if needed):

```dotenv
# Optional: override update zip URL
UPDATE_ZIP_URL=
# Optional Mongo (only if settings.useMongoDB=true)
MONGO_URI=
```

Run the bot:

```bash
node index.js
```

Follow the pairing code instructions in the terminal to link WhatsApp.

## ⚙️ Configuration

Edit `settings.js` and `config.js` for branding and keys. Key fields:

- botName: "UmaRock Bot"
- botOwner: "Mohd Umar Butt"
- ownerNumber: "916006987121"
- packname: "⚡ UmaRock | AI Bot"
- author: "Umar Butt"
- version: "1.0.0"
- themeEmoji: "⚡"

Newsletter/Channel JID:
- File: `lib/messageConfig.js`
- Set `exports.newsletterJid` (currently `TODO_NEWSLETTER_JID`).
- How: send a message to your WhatsApp Channel from the bot account, then inspect logs/session; copy the numeric JID like `120363XXXXXXXXX@newsletter`.

## ▶️ Example Usage

- .alive — bot status banner
- .owner — owner profile + socials
- .sticker — convert media to sticker
- .take <packname> — change sticker packname
- .stats — admin-only usage stats (top commands)
- .help — menu

## 📦 Environment Variables

- UPDATE_ZIP_URL (optional)
- MONGO_URI (optional; only if `useMongoDB: true`)

## 📜 Credits & License

This bot is a modified version of [Knight Bot MD](https://github.com/mruniquehacker/Knightbot-MD)
by Professor (Mr Unique Hacker).

**Original Creator:** [Professor (Mr Unique Hacker)](https://github.com/mruniquehacker)  
**Modified & Maintained by:** [Mohd Umar Butt](https://github.com/mohdumarbutt)  
**License:** MIT
