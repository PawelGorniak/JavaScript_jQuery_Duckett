function range(){
	var tab = [], i;
	if (arguments.length < 2){
		arguments[1] = arguments[0];
		arguments[0] = 0;
	}
	for (i = arguments[0]; i <= arguments[1]; i += 1){
		tab.push(i);
	}
	
	return tab;
}
console.log("Tworzenie ciągów dla podanych argumentów.")
console.log("Podany jeden argument: 10 \n" + range(10));
console.log("Podane dwa argumenty: 2 i 11 \n" + range(2,11));

function sum(array){
	var i, result = 0;
	for (i in array){
		result += array[i];
	}
	return result; 
}

console.log("Suma wyrazow ciagu od argumentu pierwszego do drugiego. Np. ciąg od 21 do 40, daje sumę: " + sum(range(21,65)));