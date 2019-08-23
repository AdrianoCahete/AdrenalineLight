var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('src/css/themeDefaults.css');
(document.head || document.documentElement).appendChild(style);

var s = document.createElement('link');
s.rel = 'stylesheet';
s.type = 'text/css';
s.href = chrome.extension.getURL('src/css/barra.css');
(document.head || document.documentElement).appendChild(s);