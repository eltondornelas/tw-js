function main(linhas) {
    let i = 0;
    var n = parseInt(linhas[i++]);
    var lista = new Map();
    while (i <= n * 2) {
        lista.set(linhas[i], linhas[i + 1]);

        i += 2;
    }

    var q = i;
    q += parseInt(linhas[i++]);
    while (i <= q) {
        let contato = linhas[i];
        let telefone = lista.get(contato);

        if (telefone)
            console.log(contato + "=" + telefone);
        else
            console.log("Não encontrado");

        i++;
    }
}