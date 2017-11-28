var el = document.getElementsByTagName('textarea')[0];
var info = document.getElementById('info');
el.addEventListener('keypress', countKeyPress, false);


function countKeyPress(e) {
	var count = 180 - el.value.length;
	var char = String.fromCharCode(e.keyCode);
	console.log(count);
	info.innerHTML = "Zostało miejsca na " + count + " znaków. Ostatni znak to: " + char;
}
