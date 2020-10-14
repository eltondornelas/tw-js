// funcao autoexecutavel
(async function () {
	function sum(a, b) {
		return new Promise(resolve => {
			setTimeout(() => { resolve(a + b) }, 1000)
		});
	}


	// let result = await Promise.all([sum(5, 3), sum(5, 5)]);
	let [result1, result2] = await Promise.all([sum(5, 3), sum(5, 5)]);
	console.log(result1);
	console.log(result2);

})()
// async sempre retorna uma Promise, para receber seu valor, teria que usar o await


/*
function sum(a, b) {
	return new Promise(resolve => {
		setTimeout(() => { resolve(a + b) }, 1000)
	});
}

// await sempre é utilizado quando existe um async
async function start() {
	let result = await sum(5, 3);
	// o await indica que vai aguardar o resultado da Promise
	console.log(result);
}
start();
*/


