

# ZhouyiStudio Blog Theme & Extensions

## 📖 Description
A curated collection of Hexo theme assets, JavaScript plugins, and configuration files designed to enhance interactive blogging experiences. This repository provides modular scripts for the `anzhiyu` Hexo theme, featuring AI-driven content summaries, interactive comment danmaku, bilingual toggling, dual search implementations, and gamified friend-link integration.

## ✨ Key Features
- **AI Post Abstracts**: Dynamically generates post summaries using the TianliGPT API (`summary.tianli0.top`) or falls back to a local randomized string pool. Supports text-to-speech (TTS) playback.
- **Comment Danmaka**: Renders floating comment bubbles fetched from Twikoo, with configurable density, intervals, and auto-hiding when the comment section is in view.
- **Dual Search Engine**: Integrates both Algolia cloud search and local JSON-based search. Includes keyboard shortcuts (`Shift+S` to open, `ESC` to close), pagination, and Pjax compatibility.
- **Traditional/Simplified Chinese Toggle**: Client-side language conversion with `localStorage` persistence and immediate DOM traversal for titles, placeholders, and body text.
- **Friend Link Fishing Mini-game**: An interactive "fishing" mechanic that fetches random posts from a configured friend link API, complete with difficulty tiers, cooldown states, and click tracking.
- **Music Playlist Data**: Pre-formatted JSON manifest for frontend audio players, including metadata, cover art, and LRC lyric paths.
- **SEO Sitemap**: Standard XML sitemap structure tailored for Baidu indexing.

## 🛠️ Installation
These modules are designed to be integrated into a Hexo blog theme structure.

1. **Theme Integration**
   Clone or extract this repository into your Hexo theme directory (typically `themes/anzhiyu/`):
   ```bash
   git clone https://github.com/ZhouyiStudio/ZhouyiStudio.github.io.git themes/anzhiyu
   ```

2. **Frontend Dependencies**
   Ensure your theme loads the required external libraries:
   - `algoliasearch` & `instantsearch.js` (for Algolia search)
   - `twikoo` (for comment barrage data fetching)
   - Pjax (recommended for smooth transitions between search/dialog states)

3. **CDN / Local Assets**
   Place the provided JavaScript files under your theme's `source/js/` directory and update your theme's layout templates to include them.

## ⚙️ Configuration & Usage
All features are driven by Hexo's `_config.yml` or the theme's configuration file (`_config.anzhiyu.yml`). Inject the following settings to enable modules:

### AI Abstracts (`js/anzhiyu/ai_abstract.js`)
```yaml
postHeadAiDescription:
  randomNum: 10
  basicWordCount: 100
  btnLink: "https://your-ai-service.com"
  key: "YOUR_TIANLI_API_KEY"
  Referer: "https://yourdomain.com"
  gptName: "Zhouyi"
  switchBtn: true
  mode: "tianli" # or "local"
```

### Comment Barrage (`js/anzhiyu/comment_barrage.js`)
```yaml
commentBarrageConfig:
  maxBarrage: 3
  barrageTime: 3000
  accessToken: "YOUR_TWIKOO_ACCESS_TOKEN"
  mailMd5: "YOUR_BLOGGER_MD5"
```

### Search Engines
- **Algolia**: Ensure `algolia.appId`, `algolia.apiKey`, and `algolia.indexName` are set in `hexo.config`.
- **Local Search**: Provide a valid JSON or XML file path via `localSearch.path`. Preload is supported via `localSearch.preload: true`.

### Chinese Translation (`js/tw_cn.js`)
```yaml
translate:
  defaultEncoding: 1 # 1: Traditional, 2: Simplified
  translateDelay: 200
  msgToTraditionalChinese: "轉為繁體"
  msgToSimplifiedChinese: "轉為簡體"
```

### Random Friends Post (`js/anzhiyu/random_friends_post.js`)
```yaml
friends_vue_info:
  apiurl: "https://your-friend-api.com/"
```
*Note: The fishing logic persists progress via `localStorage`. Modify `fdataUser` in the script for runtime overrides.*

## 📁 Repository Structure
```
├── anzhiyu/
│   ├── random.js            # Quick random post redirection utility
├── css/
│   └── var.css              # Theme CSS variable overrides
├── json/
│   └── music.json           # Music playlist manifest
├── js/
│   ├── anzhiyu/
│   │   ├── ai_abstract.js   # AI summary & TTS generator
│   │   ├── comment_barrage.js # Twikoo comment danmaka
│   │   └── random_friends_post.js # Friend link fishing game
│   ├── search/
│   │   ├── algolia.js       # Algolia cloud search interface
│   │   └── local-search.js  # Local JSON/XML search engine
│   └── tw_cn.js             # TW/CN client-side translator
└── baidusitemap.xml         # Baidu SEO sitemap
```

## 📄 License
MIT. Feel free to modify, extend, and integrate these modules into your Hexo theme or static site generator.
