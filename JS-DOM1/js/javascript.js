var newEl = document.createElement('li');
var newText = document.createTextNode('susza i ziarno');

newEl.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];

position.appendChild(newEl);

