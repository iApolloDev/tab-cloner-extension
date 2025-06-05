# Tab Cloner in Window

An extension for Chromium-based browsers (like Google Chrome, Brave, Edge). When activated via keyboard shortcut (default: `Ctrl+Shift+[`), it clones the current tab and opens it in a **new separate window**.

## 🧩 Features
- Clone the active tab into a new window
- Customizable keyboard shortcut
- No data collection
- 100% open-source

## 🖥️ Compatible Browsers
- Google Chrome
- Brave
- Microsoft Edge
- Opera (Chromium-based)

## 📦 Manual Installation
1. Download or clone this repository
2. Go to `chrome://extensions` in your browser
3. Enable **Developer Mode** (top right)
4. Click **“Load unpacked”**
5. Select the folder with the extension files

## ⌨️ Shortcut
- Default: `Ctrl + Shift + [`
- Changeable at: `chrome://extensions/shortcuts`

## 📁 Files
- `manifest.json`: extension config file
- `background.js`: main logic for cloning the tab
- Icons: `icon16.png`, `icon48.png`, `icon128.png`

## 🛡️ Security
This extension does **not** access or collect any personal data. It only uses essential permissions: `tabs` and `windows`.

## 📜 License
MIT — feel free to use, modify, and share.

---

> ⚠️ Note: Chromium does **not** allow `Ctrl + Enter` as a shortcut like Firefox does. This extension exists because Chromium lacks that feature.
