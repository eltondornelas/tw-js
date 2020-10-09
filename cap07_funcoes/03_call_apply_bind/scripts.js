var myObj = {
    name: 'TreinaWeb',
    sayName: function () {
        console.log(this.name);
        setTimeout(function () {
            console.log(this.name);
        }.bind(this), 1000);
        // sem o bind o this não fica no segundo this.name
    }
}

myObj.sayName();

// call e apply são semelhantes mas alteram a forma de serem chamados
// myFunc.call(this, 1, 2, 3);
// myFunc.apply(this, [1, 2 ,3]);