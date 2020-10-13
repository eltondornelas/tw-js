// os comandos abaixo só funcionarão no navegador, pois precisa
// que o usuário clique para ativar as funções
window.open('https://treinaweb.com.br');

var myWin = window.open('https://treinaweb.com.br');
myWin.close();

window.open('https://treinaweb.com.br', '_blank', 'resizable=no, top=200, left=200, width=300, height=200');

// location nos permitir ter informações da URL local
window.location();
location.hash;
location.hash = 'abc';
location.href = 'https://google.com';

// Alert
alert('abc');
var response = confirm('1 + 1 = 2?');
var retorno = prompt("digite um valor: ");