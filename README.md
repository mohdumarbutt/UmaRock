# ⚡ UmaRock Bot

A powerful WhatsApp bot built with Node.js and Baileys, featuring AI capabilities, group management, and entertainment commands.

## 🚀 Features

- **AI Integration**: ChatGPT and Gemini AI support
- **Group Management**: Ban, mute, promote, demote, and more
- **Entertainment**: Games, memes, quotes, and fun commands
- **Media Processing**: Image editing, video conversion, sticker creation
- **Anti-Spam**: Link protection, bad word filtering, anti-tag features
- **Automation**: Auto-welcome, auto-reactions, auto-typing

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager
- WhatsApp account for bot phone number

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohdumarbutt/UmaRock-Bot.git
   cd UmaRock-Bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   Create a `.env` file in the root directory with the following variables:
   ```env
   SESSION_ID=your_session_id
   MONGO_URI=your_mongodb_uri (optional)
   ```

4. **Configure the bot**
   Edit `settings.js` to customize:
   - Bot name and owner information
   - Owner phone number
   - API keys for external services

5. **Run the bot**
   ```bash
   npm start
   ```

## ⚙️ Configuration

### Basic Settings
Edit `settings.js` to configure:
- `botName`: Display name for the bot
- `botOwner`: Owner's name
- `ownerNumber`: Owner's WhatsApp number (with country code, no +)
- `packname`: Sticker pack name
- `version`: Bot version

### Newsletter Configuration
1. Create a WhatsApp channel
2. Send a message to the channel
3. Check session logs for the newsletter JID
4. Update `lib/messageConfig.js` with the JID

### Owner Configuration
Update `data/owner.json` with owner phone numbers:
```json
["916006987121"]
```

## 🎮 Usage

### Basic Commands
- `.alive` - Check bot status
- `.owner` - Get owner information
- `.help` - Show command list
- `.stats` - View bot statistics (admin only)

### Group Management
- `.ban @user` - Ban a user
- `.unban @user` - Unban a user
- `.mute @user` - Mute a user
- `.promote @user` - Promote to admin
- `.kick @user` - Remove from group

### Entertainment
- `.meme` - Get random meme
- `.joke` - Tell a joke
- `.quote` - Get inspirational quote
- `.ttt` - Play tic-tac-toe
- `.hangman` - Play hangman game

### Media Commands
- `.sticker` - Convert image to sticker
- `.simage` - Convert sticker to image
- `.blur` - Blur an image
- `.attp` - Create animated text sticker

## 🔧 Advanced Features

### Auto-Features
- `.autotyping` - Enable/disable auto-typing
- `.autoread` - Enable/disable auto-read
- `.autostatus` - Set custom status

### Anti-Spam
- `.antilink` - Block links in groups
- `.antitag` - Prevent excessive tagging
- `.antibadword` - Filter inappropriate words

## 📱 Deployment

### VPS Deployment
1. Upload files to your VPS
2. Install Node.js and dependencies
3. Configure environment variables
4. Use PM2 for process management:
   ```bash
   npm install -g pm2
   pm2 start index.js --name "umarock-bot"
   ```

### Docker Deployment
```bash
docker build -t umarock-bot .
docker run -e SESSION_ID=$SESSION_ID umarock-bot
```

### Pterodactyl Panel
1. Create a Node.js server
2. Upload the bot files
3. Set environment variables
4. Start the server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📜 Credits & License

This bot is a modified version of [Knight Bot MD](https://github.com/mruniquehacker/Knightbot-MD)
by Professor (Mr Unique Hacker).

**Original Creator:** [Professor (Mr Unique Hacker)](https://github.com/mruniquehacker)  
**Modified & Maintained by:** [Mohd Umar Butt](https://github.com/mohdumarbutt)  
**License:** MIT

## 📞 Support

- **GitHub Issues**: [Report bugs and request features](https://github.com/mohdumarbutt/UmaRock-Bot/issues)
- **WhatsApp**: +916006987121
- **Telegram**: [@UmaRock](https://t.me/UmaRock)
- **YouTube**: [Mohd Umar Butt](https://www.youtube.com/@mohdumarbutt_official)

## ⚠️ Disclaimer

This bot is for educational purposes only. Users are responsible for complying with WhatsApp's Terms of Service and applicable laws.

---

**⚡ UmaRock Bot - Powered by Umar Butt ⚡**