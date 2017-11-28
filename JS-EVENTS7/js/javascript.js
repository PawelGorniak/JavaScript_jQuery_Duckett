var carSelect = document.getElementsByTagName('select')[0];
var selectHint = document.getElementById('carSelectHint');
carSelect.addEventListener('change', carSelectHint, false);
var rulesCheck = document.getElementById('rules');
var form = document.getElementsByTagName('form')[0];
var warningRules = document.getElementById('warningRules');
form.addEventListener('submit', checkRules, false);
function checkRules(e) {
	if (!rulesCheck.checked){
		warningRules.textContent = "Aby wysłać formularz zaznacz zgodę na nasz regulamin.";
		e.preventDefault();
		
	}
	
}
function carSelectHint() {
	console.log(selectHint);
	selectHint.textContent = "Wybrałeś: " + this.value;
}