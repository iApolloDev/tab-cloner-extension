// background.js
chrome.commands.onCommand.addListener((command) => {
  if (command === "clone-tab-in-window") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const activeTab = tabs[0];
      if (activeTab && activeTab.url) {
        chrome.windows.create({ url: activeTab.url });
      }
    });
  }
});
