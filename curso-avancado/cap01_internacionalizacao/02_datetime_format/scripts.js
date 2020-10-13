let myDate = new Date('2020-12-31T12:00:00');

let formatter = new Intl.DateTimeFormat('en-US', {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
});

let formatter2 = new Intl.DateTimeFormat('pt-BR', {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
});

console.log(formatter.format(myDate));
console.log(formatter2.format(myDate));