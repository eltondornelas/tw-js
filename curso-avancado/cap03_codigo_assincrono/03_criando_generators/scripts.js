function* myCounter() {
	// o * pode vim colado ao nome da function tbm
	var i = 0;
	while (true) {
		yield i++;
	}
}

var counter = myCounter();
var counterValue = counter.next();

console.log(counterValue)

function* myGenerator() {
	yield* [1, 2, 3, 4, 5];
	// se não colocar o "*" no yield, vai enviar tudo
}

/*
function* myGenerator() {
	yield 5;
	console.log('we are back!');
	yield 10;
}
*/

var myGen = myGenerator();
console.log(myGen.next())
console.log(myGen.next())
console.log(myGen.next())