var Dog = {
    name: 'Dingo',
    sayName: function () {
        console.log(this.name);
    }
}

var Cat = {
    name: 'Gumball'
}

Dog.sayName.call(Cat);

// forEach é funcção de array, mas utilizamos com o call(this) em uma string!
[].forEach.call('my string', function (letter) {
    console.log(letter);
});