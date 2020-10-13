var myWindow = null,
	urlElement = document.querySelector('#myURL');

function go() {
	var url = 'http://' + urlElement.value;
	if (myWindow && !myWindow.closed) {
		myWindow.location.href = url;
	} else {
		myWindow = window.open(url, 'My Window', 'width=300, height=200');
	}
}