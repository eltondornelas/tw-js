var add = (function () {
    var counter = 0;
    // tudo que consegue acessar a variável "pai", mesmo
    // que a função pai tenha sido finalizada
    // chama-se a função de Closure
    // torna uma variável privada, porque não consegue acessar o counter
    return function () {
        // funcção Closure
        return counter++;
    }
})()