var list = document.getElementsByTagName('ul')[0];
var firstElement = list.firstChild;
var newElement = document.createElement('li');
var newText = document.createTextNode('new text');
newElement.appendChild(newText);

list.appendChild(newElement);
list.insertBefore(newElement.cloneNode(true), firstElement);

// set Attribute to all "li" items

var itemList = document.getElementsByTagName("li");
var i;
for (i = 0; i < itemList.length; i += 1) {
	itemList[i].setAttribute('class', 'cool');
}

// Add to 'h1' counts of 'li' items. - textContent

var countItemList = itemList.length;
var headerElement = document.getElementsByTagName('h1')[0];
var textHeader = headerElement.textContent;
if (countItemList > 0) {
	var newTextHeader = textHeader + " Liczba elementów 'li' na stronie wynosi: " + countItemList + ".";
	document.getElementsByTagName('h1')[0].textContent = newTextHeader;
}

// Add to 'h2' counts of 'li' items. - innerHTML add <br/>
var headerTwoElement = document.getElementsByTagName('h2')[0];
var textHeaderTwo = headerTwoElement.innerHTML;
if (countItemList > 0) {
	var newTextHeaderTwo = textHeaderTwo + "<br> Liczba elementów 'li' na stronie wynosi: " + countItemList + ".";
	document.getElementsByTagName('h2')[0].innerHTML = newTextHeaderTwo;
}
// Add to 'h3' counts of 'li' items - createElements, createTextNode, appendChild
var headerThreeElement = document.getElementsByTagName('h3')[0];
var textHeaderThree = headerThreeElement.innerHTML;
if (countItemList > 0) {
	var newElementEm = document.createElement('em');
	var newTextEm = document.createTextNode(" Liczba elementów 'li' na stronie wynosi: " + countItemList);
	newElementEm.appendChild(newTextEm);
	var position = document.getElementsByTagName('h3')[0];
	position.appendChild(newElementEm);
}

// Add to 'h4' counts of 'li' items - nodeValue


var headerFourElement = document.getElementsByTagName('h4')[0];
var textHeaderFour = headerFourElement.firstChild.nodeValue;
if (countItemList > 0) {
	var newTextHeaderFour = textHeaderFour + " Liczba elementów 'li' na stronie wynosi: " + countItemList + ".";
	document.getElementsByTagName('h4')[0].firstChild.nodeValue = newTextHeaderFour;
}