var myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(500)
	}, 2000)
})

myPromise
	.then(value => {
		console.log(`My Value: ${value}`)
		return 900
	})
	.then(value => {
		console.log(`My Value: ${value}`)
		return 100
	})



var p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(500)
	}, 2000)
})

// var myValue = myFunc();
// var p2 = Promise.resolve(myFunc());
// caso queira garantir que o retorno seja uma promise
var p2 = Promise.resolve(77)

Promise.race([p1, p2]).then((value) => {
	console.log(value)
})

Promise.all([p1, p2]).then((value) => {
	console.log(value)
})