let adrenaURL = "https://adrenaline.com.br/forum/";

// Open on Icon click
chrome.browserAction.onClicked.addListener(function (activeTab) {
    chrome.tabs.create({ url: adrenaURL });
});

// Redirect from UOL
chrome.runtime.onMessage.addListener(function (message, sender, response) {
    if (message.loadURL) {
        var newURL = sender.tab.url.replace(".uol.com.br", ".com.br");
        chrome.tabs.update(sender.tab.id, { url: newURL })
    }
});
