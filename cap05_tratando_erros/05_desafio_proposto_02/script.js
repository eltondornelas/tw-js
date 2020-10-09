function isPostivo(a) {
    if (a > 0)
        return "Sim";
    else if (a < 0)
        throw new Error("Erro, Negativo");
    else
        throw new Error("Erro, Zero");
}

function main(valores) {
    for (var valor of valores) {
        try {
            console.log(isPostivo(valor));
        } catch (error) {
            console.log(error.message);
        }
    }
}