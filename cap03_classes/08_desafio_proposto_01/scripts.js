class Poligono {
    constructor(arr = []) {
        this.arr = arr;
    }

    perimetro() {
        console.log(
            this.arr.reduce((a, b) => a + b, 0)
        )

        /*
        var ret = 0;
        for (var i = 0; i < this.arr.length; i++) {
            ret += this.arr[i];
        }
        console.log(ret);
        */
    }
}

var poligono = new Poligono([3, 4, 5]);
poligono.perimetro();

