var temp = document.createElement('script');
temp.setAttribute('type', 'text/javascript');
temp.src = chrome.extension.getURL('scripts/inject.js');
document.head.appendChild(temp);