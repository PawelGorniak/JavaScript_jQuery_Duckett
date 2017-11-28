var inputElement = document.getElementById('username');
var textMessage = document.getElementById('message');

function tipMessage() {
	if (inputElement.value.length < 5) {
		textMessage.innerHTML = "Imię musi być dłuższe niż 5 znaków";
		textMessage.className = "warning"
	} else if (inputElement.value.length > 5) {
		textMessage.innerHTML = "OK";
		textMessage.className = ""
	}
}

function errorMessage() {
	if (inputElement.value.length < 5) {
		textMessage.innerHTML = "Uzupełnij poprawnie imię!";
		textMessage.className = "warning"
	} else if (inputElement.value.length > 5) {
		textMessage.innerHTML = "OK!";
		textMessage.className = ""
	}
	
}


inputElement.addEventListener('focusin', tipMessage, false);
inputElement.addEventListener('focusout', errorMessage, false);

