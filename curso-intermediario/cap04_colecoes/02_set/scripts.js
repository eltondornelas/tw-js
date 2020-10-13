var a = { myValue: 1 };
var b = { myValue: 2 };

var mySet = new Set([a, b]);

mySet.has(a);
mySet.delete(a);
mySet.clear();
mySet.size();

/*
var mySet2 = new Set();

var a2 = { myValue: 1 },
    b2 = { myValue: 2 };

mySet2.add(a2);
mySet2.add(b2);
*/
