// use loops and conditions in JS
var number = 3;
var operator = 'ad';
var i = 0;
var msg = "";
if (operator === 'addition') {
	while (i < 11) {
		msg += i + " + " + number + " = " + (number + i) + " <br />";
		i += 1;
		
	}
} else {
	while (i < 11) {
		msg += i + " * " + number + " = " + (number * i) + "<br />";
		i += 1;
	}
}
var access = document.getElementById('result');
access.innerHTML = msg;