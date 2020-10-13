// comandos de comparação com e sem jQuery
// para acessar o jQuery no console do browser basta digitar jQuery() ou apenas $()

// exemplos com o jQuery
$('#abc');  // ja faz tudo o que o document....

// exemplo de um listener com jQuery
$('#abc').on('click', function () { console.log('abc') });

// exemplo de um listener sem jQuery
document.querySelector('#abc').addEventListener('click', function () { console.log('abc') });

// formas de acessar elementos sem jQuery
document.getElementsByTagName('div');
document.getElementsByClassName('def');
document.getElementById('abc');

// querySelector funciona como um seletor CSS então precisa do "#" e "."
document.querySelector('div'); // p/ elementos
document.querySelector('#abc'); // p ids
document.querySelector('.def');


// Sem jQuery
var myReq = new XMLHttpRequest();
myReq.onload = function () {
    console.log(JSON.parse(this.responseText));
}

myReq.open('get', 'https://api.github.com/search/repositories?q=javascript', true);
myReq.send();


// Com jQuery -> ele já recebe no formato de Objeto, não precisa transformar para JSON, ele faz
$.ajax('https://api.github.com/search/repositories?q=javascript').then(function (response) {
    console.log(response);
})