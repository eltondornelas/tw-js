"use strict"
// força uma verificação mais rigorosa
// se não incluir o var em i = 0, ele da erro
// sem o use strict vai funcionar

function myLooping() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
        // debugger;  // F8
    }

    /*
    for(i = 0; i < 5; i++){
        console.log(i);
    }
    */
}

myLooping();

function Pencil() {
    this.color = 'red';
}

var myPencil = new Pencil();