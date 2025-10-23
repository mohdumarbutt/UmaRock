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