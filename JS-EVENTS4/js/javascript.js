var msg = '<div id = \"close\"> zamknij x </div>';
msg += "<p id=\"warning\"> Wystąpił błąd, spróbuj użyć innej przeglądarki, albo kliknij zamknij i sprawdź komunikat konsoli javascript</p>";

var newEl = document.createElement("div");
newEl.setAttribute("id", "box");
newEl.innerHTML = msg;
document.body.appendChild(newEl);
 
newEl.addEventListener('click', removeBox, false);

function removeBox(){
	var parentOfBox = newEl.parentNode;
	parentOfBox.removeChild(newEl);
}