var textField = document.getElementById('username');

document.addEventListener('DOMContentLoaded', selectTextField, false);
window.addEventListener('beforeunload', question, false);
function question(event){
	event.returnValue = "Dane w polu tekstowym zostaną utracone. Czy jesteś pewny że chcesz wyjść ze strony?";
}
function selectTextField() {
	textField.focus();
}