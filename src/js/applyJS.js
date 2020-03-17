var meta = document.createElement('meta');
meta.name = 'theme-color';
meta.content = '#3c3c3c';
(document.head||document.documentElement).appendChild(meta);

// Added Notification that the addon is in place.
var e = document.getElementsByClassName('p-footer-linkList');
var footerActionBar = e[0];

var themeStatus = document.createElement("a");
themeStatus.className="addon_Adrena_LE-Status";
themeStatus.setAttribute("href", "https://adrenaline.com.br/forum/threads/extensao-pro-tema-claro-no-forum.628918/");
themeStatus.setAttribute("target", "_blank");
themeStatus.innerHTML = ("Extensão BetterAdrena ativada");
footerActionBar.appendChild(themeStatus);