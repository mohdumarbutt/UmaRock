# CUSTOMIZATION REPORT — UmaRock Bot Rebrand

Branch: `umarock/rebrand`

## Summary of Changes

- Synchronized configuration in `settings.js` and `config.js` for UmaRock branding
- Updated owner number in `data/owner.json`
- Rebranded startup banners and globals in `index.js` and `main.js`
- Centralized channel context in `lib/messageConfig.js` with TODO for `newsletterJid`
- Refreshed `.alive` response and added `.stats` command; enhanced `.owner` command with socials
- Updated welcome templates in `commands/welcome.js` and guidance in `lib/welcome.js`
- Replaced/adjusted various references from Knight to UmaRock across commands
- Added optional helpers: `lib/rateLimiter.js`, `lib/db.example.js`
- Replaced `README.md` with new UmaRock documentation
- Added `assets/README_add_images.txt` with specs for branded assets
- Created `FILES_WITH_BRANDING.md` inventory for any remaining occurrences

## Per-file Diffs (highlights)

- `settings.js`
  - packname → "⚡ UmaRock | AI Bot"
  - author → "Umar Butt"
  - botName → "UmaRock Bot"
  - botOwner → "Mohd Umar Butt"
  - ownerNumber → "916006987121"
  - themeEmoji → "⚡"
  - version → "1.0.0"
  - useMongoDB toggle added (default false)

- `config.js`
  - Export synced fields: botName, botOwner, ownerNumber, packname, author, version, themeEmoji

- `data/owner.json`
  - Set to ["916006987121"]

- `index.js`
  - Added UmaRock header comment
  - Global `botname` → "UmaRock Bot" and `themeemoji` → "⚡"
  - Startup self-DM banner text rebranded; newsletterName → UmaRock; JID now `TODO_NEWSLETTER_JID` (commented)
  - Terminal banner updated to UmaRock and new links

- `main.js`
  - `global.channelLink` updated to UmaRock channel
  - Added centralized `channelInfo` with `newsletterName: 'UmaRock'` and `newsletterJid: 'TODO_NEWSLETTER_JID'`
  - Added `.stats` command wiring and command usage tracking

- `lib/messageConfig.js`
  - Rewrote obfuscated file to readable export with TODO `newsletterJid`
  - `newsletterName: 'UmaRock'`

- `commands/alive.js`
  - Replaced message with UmaRock ⚡ banner and used shared `channelInfo`

- `commands/owner.js`
  - Enhanced to include socials, vCard details, branded header

- `commands/stats.js` (new)
  - Admin-only summary of total command usage and top 5 commands (uses `data/messageCount.json` with atomic write)

- `commands/welcome.js`
  - Template string updated to UmaRock style header; unchanged function signature

- `lib/welcome.js`
  - Setup help now shows UmaRock default template

- Misc command updates
  - `attp.js`, `take.js`, `sticker.js`, `stickercrop.js`, `igs.js`, `video.js`, `help.js`, `github.js`, `autoread.js`, `pair.js`, `simp.js`, `autostatus.js`, `textmaker.js` — branding and packname updates, and TODO newsletter JID comments where relevant

- `README.md`
  - Full replacement with UmaRock docs

- Assets
  - Added `assets/README_add_images.txt` with exact specs for `bot_image.jpg`, `stickintro.webp`, `sticktag.webp`

## Remaining Branding/Duplicates

- `FILES_WITH_BRANDING.md` lists legacy references (headers like "Knight Bot - A WhatsApp Bot" in some libs) retained for attribution; harmless. Any references to newsletterName were updated, and JID set to TODO placeholder in central places.

- Global duplicates: `global.channelLink` set centrally in `main.js`; `global.botname` and `global.themeemoji` set in `index.js` only.

## Environment Variables Required

- `UPDATE_ZIP_URL` (optional)
- `MONGO_URI` (optional; only if `useMongoDB: true`)

## How to obtain newsletter JID (one-liner)

Send a message to your WhatsApp Channel from the bot account, then copy the numeric JID from the message context/logs (format: `120363XXXXXXXXX@newsletter`) and set it in `lib/messageConfig.js` and any TODOs.

## Local Testing Steps

```bash
# Install
npm install

# Run
node index.js

# Pair the device via terminal instructions, then test:
# In WhatsApp chat: .alive, .owner, .stats
```

Recommended deployment: VPS with Node 18+, use PM2 or a panel; optional Dockerization can be added later.

## Git Branch & Commit Plan

Branch name: `umarock/rebrand`

Suggested commits:
- chore(rebrand): sync settings/config and owner number
- chore(branding): update index/main banners and channel info
- feat(commands): enhance .owner and .alive; add .stats
- chore(welcome): update welcome templates and config
- chore(docs): replace README and add assets README
- chore(infra): add db.example.js and rateLimiter helper
- chore(inventory): add FILES_WITH_BRANDING.md and customization report

### Commands to create branch and produce review bundle

```bash
# create branch
git checkout -b umarock/rebrand

# stage changes
git add -A

# commit (example message)
git commit -m "chore(rebrand): initial UmaRock branding, config sync, owner number"
# repeat logical commits as above

# generate patch for review
git format-patch origin/$(git symbolic-ref --short refs/remotes/origin/HEAD | sed 's@origin/@@')..HEAD -o rebrand-patches
# or a single diff file
git diff origin/$(git symbolic-ref --short refs/remotes/origin/HEAD | sed 's@origin/@@')..HEAD > umarock-rebrand.patch
```

## Explicit TODOs

- TODO_NEWSLETTER_JID — set in `lib/messageConfig.js`, `main.js`, `index.js`, and any commands still showing TODO
  - One-liner: "Send a message in your Channel from the bot and copy the JID like 120363XXXXXXXXX@newsletter from logs/session."

## Assets Replacement List

- `assets/bot_image.jpg` — replace with UmaRock logo (512x512, JPG)
- `assets/stickintro.webp` — UmaRock intro sticker (512x512, WEBP)
- `assets/sticktag.webp` — UmaRock tag sticker (512x512, WEBP)

See `assets/README_add_images.txt` for detailed specs.
