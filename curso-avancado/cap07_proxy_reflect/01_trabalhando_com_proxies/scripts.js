// altera comportamento padrão com o Proxy

let myObj = {
	a: 1,
	b: 2
}

// objeto alvo = myObj
let myProxy = new Proxy(myObj, {
	// target é o próprio objeto
	// prop é o valor
	// receiver é o próprio Proxy
	get: function (target, prop, receiver) {
		console.log(`Voce acessou ${prop}`);
		return target[prop]; // esse é o comportamento padrão
	},
	// pode ter o receiver como parametro também
	set: function (target, prop, value) {
		if (prop !== 'a' && prop !== 'b') {
			return false;
		}
		target[prop] = value;
		return true;
	}
})

// no console tente myObj.b = 5 e depois myProxy.b = 5
