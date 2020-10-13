function Pencil(color, length) {
    // sem o this, ele se torna uma variável privada.
    var code = 153;

    // com essa condição, mesmo que esqueça do new, o this vai referenciar o objeto
    // obs: se não fizer isso e esquecer do new, o "this" vai apontar para o window (global)
    if (!(this instanceof Pencil)) {
        return new Pencil(color, length);
    }

    this.color = color;
    this.length = length;
    this.write = function (text) {
        console.log(text);
    }

    this.getCode = function () {
        return code;
    }
    this.setCode = function (value) {
        code = value;
    }

    // adicionando variável em tempo de execução dentro de um objeto para todas as instancias
    Pencil.prototype.number = 5;
    // digitando isso no console do browser vai adicionar para todas instancias
}

var myPencil = new Pencil('red', 15);
var myPencil2 = new Pencil('blue', 20);

console.log(myPencil instanceof Pencil);