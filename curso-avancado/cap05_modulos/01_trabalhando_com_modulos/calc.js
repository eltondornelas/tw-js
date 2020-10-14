export var myVar = 5;
var myVar2 = 10;
// privada para mundo externo

export function myFunc() {
	console.log('TreinaWeb');
}

// exportação padrão, caso alguem importe algo de qualquer nome
// exemplo: import abc from './calc.js'
export default class Calc {
	static sum(a, b) {
		return a + b;
	}
}

// outra forma de exportar
// export { myVar, myFunc, Calc };
// export { Calc as MyClass };