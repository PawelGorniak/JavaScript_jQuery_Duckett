var elList = document.getElementById('list');
var elCounter = document.getElementById('counter');
var elLink = document.querySelector('a');

function addItem() {
	var count = elCounter.textContent;
	
	var newItem = document.createElement('li');
	var newText = document.createTextNode('Element nr. ' + (+count + 1));
	newItem.appendChild(newText);
	elList.appendChild(newItem);
	
}

/* function addCounter() {
	elCounter.innerHTML = +elCounter.innerHTML + 1;
} */

elLink.addEventListener('click', addItem, false);
// elList.addEventListener('DOMNodeInserted', addCounter, false);



var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            elCounter.innerHTML = +elCounter.innerHTML + 1;
        }})
});

 
// Notify me of everything!
var observerConfig = {
	childList: true, 
};
 
// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.body;
observer.observe(elList, observerConfig);
//console.log (insertedNodes);