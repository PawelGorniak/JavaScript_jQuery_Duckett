var elOne = document.getElementsByTagName('div')[0];
var elTwo = document.getElementsByTagName('div')[1];

if (elOne.hasAttribute('class')) {
	var nameAttr1 = elOne.getAttribute('class');
}
if (elTwo.hasAttribute('class')) {
	var nameAttr2 = elTwo.getAttribute('class');
}

var newEl1 = document.createElement('p');
var newText1 = document.createTextNode('Nazwa klasy pierwszego DIVa to ' + nameAttr1 + ".");
newEl1.appendChild(newText1);
var position = document.getElementsByClassName('result')[0];
position.appendChild(newEl1);

var newEl2 = document.createElement('p');
var newText2 = document.createTextNode('Nazwa klasy drugiego DIVa to ' + nameAttr2 + ".");
newEl2.appendChild(newText2);
position.appendChild(newEl2);




