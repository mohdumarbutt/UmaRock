# Files with Old Branding - Replacement Inventory

This document lists all files containing old branding strings that need to be replaced with UmaRock branding.

## Files Requiring Branding Updates

### Core Configuration Files
- `settings.js` - Lines 2, 4, 5, 6, 13: packname, botName, botOwner, ownerNumber, updateZipUrl
- `config.js` - No branding strings found
- `index.js` - Lines 2, 3, 4, 76, 77, 151-154, 259-266: Header comment, global.botname, global.themeemoji, newsletter references
- `main.js` - Lines 123, 131-135: global settings and channel info
- `package.json` - Lines 2, 16: name and docker build command

### Data Files
- `data/owner.json` - Line 1: Owner numbers array

### Command Files
- `commands/alive.js` - Lines 4, 21-24: Bot name and newsletter info
- `commands/owner.js` - Uses settings values (no direct strings)
- `commands/play.js` - Line 62: Powered by comment
- `commands/simp.js` - Lines 41, 56: newsletterName
- `commands/textmaker.js` - Lines 10, 23: newsletterName and caption
- `commands/take.js` - Line 17: Default packname
- `commands/update.js` - Line 52: User-Agent header
- `commands/video.js` - Line 112: Caption text
- `commands/pair.js` - Lines 14, 33, 52, 67, 89, 110, 126: newsletterName references
- `commands/github.js` - Lines 9, 13, 21: Repository URL and bot name
- `commands/welcome.js` - Lines 88, 106, 130: Powered by text
- `commands/clearsession.js` - Line 11: newsletterName
- `commands/igs.js` - Lines 92, 120, 302: packname references
- `commands/help.js` - Lines 8, 244, 258: botName and newsletterName
- `commands/autotyping.js` - Lines 2, 32, 63: Header comment and newsletterName

### Library Files
- `lib/uploader.js` - Lines 2, 3: Header comment
- `lib/ytdl2.js` - Lines 2, 3: Header comment  
- `lib/myfunc2.js` - Lines 2, 3: Header comment
- `lib/myfunc.js` - Lines 2, 3: Header comment
- `lib/exif.js` - Lines 2, 3, 93, 114, 135: Header comment and GitHub URLs
- `lib/messageConfig.js` - Line 1: Obfuscated newsletter info (contains KnightBot)

### Other Files
- `.git/logs/HEAD` - Git history (not modified)
- `.git/HEAD` - Git reference (not modified)

## Summary
Total files requiring updates: 25 files
- Core config files: 4
- Command files: 15  
- Library files: 6
- Data files: 1

All instances of "Knight", "KnightBot", "Knight Bot", "Professor", "mruniquehacker" need to be replaced with appropriate UmaRock equivalents.