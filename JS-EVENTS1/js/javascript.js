
	
(function () {"use strict";
	function getTarget(e) {
		if (!e) {
			e = window.event;
		}
		return e.targe || e.srcElement;
		
	}
	var element = document.getElementById('shoppingList');
	function removeElement(e) {
		
		var elSelect = getTarget(e), parentSelect = elSelect.parentNode, grandparent = elSelect.parentNode.parentNode;
		if (e.preventDefault()) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		grandparent.removeChild(parentSelect);
		
	}

	
			  
	
	if (element.addEventListener) {
		element.addEventListener('click', function (e) {removeElement(e); }, false);
	} else {
		element.attachEvent('onclick', function (e) {removeElement(e); });
	}
			 }());
