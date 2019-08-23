var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('src/css/themeDefaults.css');
(document.head||document.documentElement).appendChild(style);

var s = document.createElement('link');
s.rel = 'stylesheet';
s.type = 'text/css';
s.href = chrome.extension.getURL('src/css/light.css');
(document.head || document.documentElement).appendChild(s);

var oldT = document.createElement('link');
oldT.rel = 'stylesheet';
oldT.type = 'text/css';
oldT.href = chrome.extension.getURL('src/css/oldTheme.css');
(document.head || document.documentElement).appendChild(oldT);