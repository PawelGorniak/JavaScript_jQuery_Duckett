/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, JSLINT, brackets */

(function () {
	"use strict";
	var mails = ['Całuję, Ciocia Emilia \nurodzeni 04.05.2011 (matka Lady Penelope): Red Lion, Doctor Hobbles 3, Little Iroquois, Donovan', 'Całuję, Ciocia Emilia\nodeszli 04.01.2017: Donovan, Red Lion\nurodzeni 04.07.2013 (matka Ciocia Klocia): Jacenty, Bronek 3, Żonkil', 'Całuję, Ciocia Emilia\nodeszli 08.11.2017: Doctor Hobbles 3\nurodzeni 04.07.2014 (matka Adelajda): Jarosław, Lech, Aleksander'], name, nameD;
	
	
	// main function makes set of cats
	function makeSetOfCats() {
		var catsSet = {}, catDead = {}, i, j, linesArray, oneLine, catResult, nameCount, oneName, namesArray;
		
		//split mails to lines
		function lines(mails) {
			return mails.split("\n");
		}
		
		function getNames(line) {
			return line.slice(line.indexOf(":") + 2).split(", ");
		}
		
		// update or add new cat's object 
		function catBirthRecord(namesArray, dateBirth, nameMother) {
			var i, oneName;
			//petla idaca przez imiona			
			for (i = 0; i < namesArray.length; i += 1) {
				oneName = namesArray[i];
				catsSet[oneName] = {name: oneName, birthday: dateBirth, mother: nameMother };
				
			}
		}
		
		function beetwen(string, start, end) {
			var indexStart = string.indexOf(start) + start.length;
			var indexEnd = string.indexOf(end);
			return string.slice(indexStart, indexEnd);
			
		}
		
		function extractMother(line) {
			return beetwen(line, "matka ", ")");
		}
		
		
		
		// add new properties deathdate
		function catDeadRecord(namesArray, dateDeath) {
			var i, oneName;
			for (i = 0; i < namesArray.length; i += 1) {
				oneName = namesArray[i];
				if (catsSet[oneName]) {
					catsSet[oneName].dateDead = dateDeath;
				} else {
					catsSet[oneName] = {};
					catsSet[oneName].dateDead = dateDeath;
				}
				
			}
		}
		
		function sliceString(text, start, length) {
			return Number(text.slice(start, start + length));
		}
		
		function extractDate(oneLine, typeDate) {
			var n, handleDate, dateToObject;
			
			if (typeDate === "birth") {
				n = 0;
			} else {
				n = 1;
			}
			
			
			handleDate = oneLine.slice((9 - n), (19 - n));
			dateToObject = new Date(sliceString(handleDate, 6, 4), sliceString(handleDate, 3, 2), sliceString(handleDate, 0, 2));
			
			var month = dateToObject.getMonth();
			if (month < 10)
			month = "0" + month;
			return dateToObject.getDate() + "." + dateToObject.getMonth() + "." + dateToObject.getFullYear();
		}
		
		for (i = 0; i < mails.length; i += 1) {
			linesArray = lines(mails[i]);
			
			// rozbicie na linie w poszczegolnych mailach linesArray - linie maili 
			for (j = 0; j < linesArray.length; j += 1) {
				//przeglad kazdej lini oddzielnie oneLine - jedna linia
				oneLine = linesArray[j];
				namesArray = getNames(oneLine);
				if (oneLine.slice(0, 8) === "urodzeni") {
					catBirthRecord(namesArray, extractDate(oneLine, "birth"), extractMother(oneLine));
					
				} else if (oneLine.slice(0, 7) === "odeszli") {
					
					catDeadRecord(namesArray, extractDate(oneLine, "death"));
				}
			}
		}
		
		
		
		return catsSet;
	}
	
	var dataCats = makeSetOfCats();
	console.log("Zbiór kotów", dataCats);

	function dateFormat(date) {
		var month = date.getMonth();
		if (date.getMonth() < 10)
			month = "0" + (date.getMonth() + 1);
		return date.getFullYear() + "/" + month + "/" + date.getDate();
	}
	
	
	function catInfo(set, name) {
		if (! name in set) {
			console.log("info o urodzinach", set[name].birthday);
			return "Kot o imieniu " + name + " nie istnieje w Ciotki zbiorze!";
		} else {
			var catObject = set[name];
			var message = "Kot o imieniu " + name + " urodził się " + catObject.birthday;
			if (catObject.dateDead) {
				message += ", ale umarł " + catObject.dateDead;
			}
			return message;
		}
	}
	
	function oldestCat(set) {
		var name = null, n;
		for (n in set){
			var cat = set[n];
			if (name == null || ((new Date(cat.birthday)).getTime()) < ((new Date(name.birthday)).getTime()))
				{
					
				 name = cat;}
		}
		return name;		
	}
	
	
	
	console.log("Najstarszy z kotów to: ", oldestCat(dataCats).name, " urodził się - ", oldestCat(dataCats).birthday );
	
	
	var dzisiaj = new Date();
	
	console.log( "Dzisiejsza data to: ", dateFormat(dzisiaj));
	
	var i;
	var x = 0;
	for (i in dataCats) {
		if(!dataCats[i].dateDead) {
		x++;
		}
	}
	console.log("Aktualnie żyje " + x + " kotów!");
}());





				