(async function () {
	var response = await fetch('https://api.github.com/search/repositories?q=javascript');
	var myData = await response.json()
	console.log(myData);
})()


// sincrono
fetch('https://api.github.com/search/repositories?q=javascript')
	.then(response => response.json())
	.then(myData => console.log(myData))


