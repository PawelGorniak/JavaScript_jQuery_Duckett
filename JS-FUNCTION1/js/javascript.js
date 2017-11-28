
function countAnimals(animal) {
	var animalCount = String(animal);
	while (animalCount.length < 3) {
		animalCount = "0" + animalCount;
	}
	return animalCount;
}

function setAnimal(chicken, cow, pig) {
	console.log(countAnimals(chicken) + " kurczaków");
	console.log(countAnimals(cow) + " krów");
	console.log(countAnimals(pig) + " świń");
}
setAnimal(27, 1, 10);