# ⚡ UmaRock Bot

A powerful WhatsApp bot built with Node.js and Baileys library, featuring group management, fun commands, and AI capabilities.

## 🚀 Features

- **Group Management**: Ban, mute, promote, demote, kick users
- **Anti-Spam Protection**: Antilink, antitag, antibadword filters
- **Fun Commands**: Games, memes, quotes, facts, and more
- **Media Tools**: Sticker creation, image editing, video/audio download
- **AI Integration**: ChatGPT, image generation, text-to-speech
- **Automation**: Auto-welcome, auto-reactions, auto-typing
- **Admin Tools**: Comprehensive group administration features

## 📦 Installation

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
   ```bash
   cp .env.example .env
   ```
   
   Add your API keys to `.env`:
   ```
   SESSION_ID=your_session_id
   OPENAI_API_KEY=your_openai_key
   GIPHY_API_KEY=your_giphy_key
   MONGO_URI=your_mongo_uri (optional)
   ```

4. **Configure the bot**
   - Update `settings.js` with your bot details
   - Set your WhatsApp number in `data/owner.json`
   - Configure newsletter JID in `lib/messageConfig.js`

5. **Run the bot**
   ```bash
   npm start
   ```

## ⚙️ Configuration

### Bot Settings (`settings.js`)
```javascript
const settings = {
  botName: "UmaRock Bot",
  botOwner: "Mohd Umar Butt",
  ownerNumber: "916006987121",
  packname: "⚡ UmaRock | AI Bot",
  author: "Umar Butt",
  version: "1.0.0",
  themeEmoji: "⚡"
};
```

### Owner Configuration (`data/owner.json`)
```json
["916006987121"]
```

### Newsletter Setup
1. Create a WhatsApp channel
2. Send a message to the channel
3. Check session logs for the JID (format: `120363XXXXXXXXX@newsletter`)
4. Update `lib/messageConfig.js` with the JID

## 🎮 Usage

### Basic Commands
- `.alive` - Check bot status
- `.owner` - Get owner information
- `.help` - Show command list
- `.stats` - View usage statistics (admin only)

### Group Management
- `.ban @user` - Ban a user
- `.mute @user [minutes]` - Mute a user
- `.promote @user` - Promote to admin
- `.kick @user` - Remove from group

### Fun Commands
- `.meme` - Get random memes
- `.joke` - Tell a joke
- `.quote` - Get inspirational quotes
- `.fact` - Share interesting facts
- `.ttt` - Play Tic-Tac-Toe

### Media Commands
- `.sticker` - Convert image to sticker
- `.simage` - Convert sticker to image
- `.play song_name` - Play music
- `.video youtube_url` - Download video

## 🔧 Advanced Features

### Auto-Features
- `.autotyping on/off` - Auto typing indicator
- `.autoread on/off` - Auto read messages
- `.autoreact on/off` - Auto react to messages
- `.welcome on/off` - Auto welcome new members

### Admin Tools
- `.antilink on/off` - Block links in group
- `.antitag on/off` - Block @everyone mentions
- `.antibadword on/off` - Filter bad words
- `.pmblocker on/off` - Block private messages

## 🐳 Deployment

### Using Docker
```bash
docker build -t umarock-bot .
docker run -e SESSION_ID=$SESSION_ID umarock-bot
```

### Using PM2
```bash
npm install -g pm2
pm2 start index.js --name "umarock-bot"
pm2 startup
pm2 save
```

### Using Pterodactyl Panel
1. Upload the bot files
2. Set Node.js as the runtime
3. Configure environment variables
4. Start the server

## 📊 Monitoring

The bot includes built-in monitoring features:
- Memory usage tracking
- Command usage statistics
- Error logging and reporting
- Performance metrics

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

- **GitHub Issues:** [Report bugs or request features](https://github.com/mohdumarbutt/UmaRock-Bot/issues)
- **WhatsApp:** [916006987121](https://wa.me/916006987121)
- **Telegram:** [@UmaRock](https://t.me/UmaRock)
- **YouTube:** [Mohd Umar Butt Official](https://www.youtube.com/@mohdumarbutt_official)

## 🔗 Links

- **GitHub:** https://github.com/mohdumarbutt
- **Instagram:** https://www.instagram.com/theumar_butt
- **Facebook:** https://www.facebook.com/MohdUmarButtOfficial
- **WhatsApp Channel:** https://whatsapp.com/channel/0029Vb6vgNd5PO0wMurhKp01
- **Telegram Group:** https://t.me/+NubNX5aSOI83ZjA1

---

⚡ **UmaRock Bot** - Powered by Umar Butt