var myObj = {
    name: 'TreinaWeb',
    sayName: function () {
        console.log(this.name);
        // Arrow functions não criam um novo escopo
        // elas mantem os escopos em que estão sendo
        // utilizadas. pode retirar o bind nessa forma!
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}

myObj.sayName();
