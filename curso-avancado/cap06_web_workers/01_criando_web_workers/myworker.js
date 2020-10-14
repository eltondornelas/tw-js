// como o worker trabalha em outra Thread, como vamos enviar o valor
// uma vez que a Thread principal é a Thread da interface também?
// por não terem acesso a Thread principal eles não tem acesso ao DOM, ou seja,
// comandos como innerHTML não funciona no Worker

var i = 0;

setInterval(() => {
	i++;
	postMessage(i);
	// é aqui que envia para a Thread principal
}, 1000);
