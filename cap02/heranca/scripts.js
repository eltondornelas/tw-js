function Animal() {
    this.sleep = function () {
        console.log('zzzzzzz');
    }
}

function Dog() {
    this.bark = function () {
        console.log('woof');
    }
}

// criando a herança
Dog.prototype = new Animal();
var myDog = new Dog();
