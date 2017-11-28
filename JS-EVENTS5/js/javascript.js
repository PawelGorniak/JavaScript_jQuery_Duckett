var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function position(e){
	sx.innerHTML = e.screenX;
	sy.innerHTML = e.screenY;
	px.innerHTML = e.pageX;
	py.innerHTML = e.pageY;
	cx.innerHTML = e.clientX;
	cy.innerHTML = e.clientY;
}

el = document.getElementsByTagName("BODY")[0];
el.addEventListener('mousemove', position, false);
