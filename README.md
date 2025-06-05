# Tab Cloner in Window

An extension for Chromium-based browsers (like Google Chrome, Brave, Edge). When activated via keyboard shortcut (default: `Ctrl+Shift+0`), it clones the current tab and opens it in a **new separate window**.

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
- Default: `Ctrl + Shift + 0`  
- Changeable at: `manifest.json`

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
>
> This extension is perfect for use with the **Gnome Extension [PaperWM](https://github.com/paperwm/PaperWM) + Web Apps**.  
> On Firefox, pressing `Ctrl + Enter` already opens the tab in a new window, making it ideal for placing windows side by side using PaperWM.  
> Chromium lacks this option — so I built this extension.  
>
> The Chromium browser does **not natively offer** a keyboard shortcut to clone the current tab into a new window.
>
> What it does offer:
> - `Ctrl + N`: new empty window  
> - `Ctrl + Shift + N`: new incognito window  
> - Right-click tab → "Move tab to new window" (manual)  
>
> 💡 **Perfect for ChatGPT users**: easily create multiple new chats side by side using Web Apps + [PaperWM](https://github.com/paperwm/PaperWM).

---

## 💡 Want `Ctrl + Enter` like in Firefox?

You can simulate it with a **custom system shortcut** using [autokey](https://github.com/autokey/autokey) or [ydotoold](https://github.com/ReimuNotMoe/ydotool).

1. Create a script with `ydotool` to simulate `Ctrl + Shift + 0`. Example:
    ```bash
    #!/bin/bash
    ydotool key 29:1 42:1 11:1 11:0 42:0 29:0
    ```

2. Go to **System Settings > Keyboard > Custom Shortcuts**.

3. Create a new shortcut, set the key combination to `Ctrl + Enter`, and assign it to the script above.

4. Make sure `ydotoold` runs on system startup (add it to your startup applications).

Done! Now when you press `Ctrl + Enter`, the system will simulate `Ctrl + Shift + 0` — opening the current tab in a new window, just like Firefox.



