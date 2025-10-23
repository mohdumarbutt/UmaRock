# Files with Old Branding - Inventory

## Files requiring Knight Bot → UmaRock Bot rebrand:

### Core Configuration Files:
- `settings.js` - Lines 2, 4, 5, 6, 13: packname, botName, botOwner, ownerNumber, updateZipUrl
- `config.js` - No branding found
- `index.js` - Lines 2, 3, 76, 77, 259, 261-264: Header comment, global.botname, global.themeemoji, startup messages
- `main.js` - Lines 123, 124, 132-134: global.packname, global.author, channelInfo

### Command Files:
- `commands/alive.js` - Lines 4, 21-22: Bot name in message, newsletter info
- `commands/owner.js` - Uses settings values (will be updated via settings.js)
- `commands/help.js` - Lines 8, 21, 242-243, 256-258: Bot name, version, owner, newsletter info
- `commands/github.js` - Lines 9, 13, 21: Repository URL, bot name, credits
- `commands/play.js` - Line 62: Credits comment
- `commands/simp.js` - Lines 41, 56: Newsletter name
- `commands/textmaker.js` - Lines 10, 23: Newsletter name, caption
- `commands/take.js` - Line 17: Default packname
- `commands/video.js` - Line 112: Caption text
- `commands/update.js` - Line 52: User-Agent header
- `commands/welcome.js` - Lines 88, 106, 130: Welcome message text
- `commands/pair.js` - Lines 14, 33, 52, 66, 89, 110, 126: Newsletter name
- `commands/chatbot.js` - Line 347: Bot name in AI context
- `commands/clearsession.js` - Line 11: Newsletter name
- `commands/img-blur.js` - Line 69: Newsletter name
- `commands/autostatus.js` - Line 10: Newsletter name
- `commands/attp.js` - Line 17: Packname
- `commands/igs.js` - Lines 92, 120, 302: Packname
- `commands/autotyping.js` - Lines 2, 32, 63, 86, 101: Header comment, newsletter name
- `commands/stickercrop.js` - Lines 40, 63, 152, 190, 238: Newsletter name, packname
- `commands/autoread.js` - Lines 2, 32, 63, 86, 101: Header comment, newsletter name
- `commands/anticall.js` - Lines 2, 32, 63, 86, 101: Header comment, newsletter name
- `commands/antidelete.js` - Lines 2, 32, 63, 86, 101: Header comment, newsletter name
- `commands/antilink.js` - Lines 2, 32, 63, 86, 101: Header comment, newsletter name
- `commands/antitag.js` - Lines 2, 32, 63, 86, 101: Header comment, newsletter name
- `commands/pmblocker.js` - Lines 2, 32, 63, 86, 101: Header comment, newsletter name

### Library Files:
- `lib/uploader.js` - Lines 2-3: Header comment
- `lib/myfunc.js` - Lines 2-3: Header comment  
- `lib/ytdl2.js` - Lines 2-3: Header comment
- `lib/myfunc2.js` - Lines 2-3: Header comment
- `lib/messageConfig.js` - Obfuscated file with KnightBot references

### Data Files:
- `data/owner.json` - Line 1: Owner numbers array
- `data/messageCount.json` - No branding found

### Package Files:
- `package.json` - Lines 2, 16: Package name, docker build command

### Git Files:
- `.git/HEAD` - Branch name reference
- `.git/logs/HEAD` - Commit history references

## Summary:
- **Total files requiring updates**: ~35+ files
- **Main categories**: Core config, commands, library files, data files
- **Most common replacements**: "Knight Bot" → "UmaRock Bot", "KnightBot" → "UmaRock", newsletter references