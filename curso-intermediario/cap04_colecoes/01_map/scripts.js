var myObjOld = {};

var a1 = { value: 1 },
    b1 = { value: 2 };

myObjOld[a1] = 5;
myObjOld[b1] = 10;
console.log(myObjOld);
// não funciona como gostaríamos, por isso a existência do Map.

var myObj = new Map();
// var myObj = new WeakMap(); // resto é igual menos o .size() e o .clear()

var a = { myValue: 1 },
    b = { myValue: 2 };

myObj.set(a, 5);
myObj.set(b, 10);

console.log(myObj.get(a), myObj.get(b));
myObj.clear();
myObj.size();


