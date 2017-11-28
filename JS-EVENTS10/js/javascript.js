var elNameRecord = document.querySelector('h2');
var elInputNameRecord = document.getElementById('inputNameRecord');
var elButtonrecord = document.getElementById('buttonRecord');
var elSectionButtons = document.getElementById('buttons');

function checkDataState(e) {
	
	if (!e) {
		e = window.event;
	}
	var target;
	target = e.target || e.srcElement;
	
	var elClickedDataState = target.getAttribute('data-state');
	
	switch (elClickedDataState) {
	case "record":
		setPause(target);
		break;
	case "pause":
		setRecord(target);
		break;
	}
}

function setPause(target) {
	target.setAttribute('data-state', "pause");
	target.value = "Pause";
}

function setRecord(target) {
	target.setAttribute('data-state', "record");
	target.value = "Record";
	
}

function writeLabel() {
	elNameRecord.textContent =  elInputNameRecord.value;
}

elSectionButtons.addEventListener('click', checkDataState, false);



elInputNameRecord.addEventListener('keyup', writeLabel, false);




if (elSectionButtons.addEventListener) {
	elSectionButtons.addEventListener('click', checkDataState, false);
	elInputNameRecord.addEventListener('keyup', writeLabel, false);
} else {
	elSectionButtons.attachEvent('onclick', checkDataState);
	elInputNameRecord.attachEvent('onkeyup', writeLabel);
}
