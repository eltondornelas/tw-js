let myNumber = 1285;

let formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'JPY'
});

let formatter2 = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL'
});

console.log(formatter.format(myNumber));
console.log(formatter2.format(myNumber));