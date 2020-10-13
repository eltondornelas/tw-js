
// looping com regex
var regexp = /a.c/g;
var myString = '234abc123 a4c5';
var match;

while (match = regexp.exec(myString)) {
    console.log(`${match[0]} - ${match.index}`);
    // quando o exec encontra mais nada retorna null, com isso sai do while
}


// search()
// console.log('abc'.search('/b/'));


// replace()
/*
var myString = 'Abc abc Abc abc';

console.log(myString.replace('a', '1'));
console.log(myString.replace(/a/gi, '1'));
// g -> todas ocorrencias, i -> ignore case


var myString2 = 'abc-954-def';
var myRegex = /(ab)c-(\d{3})-def/;
// o parenteses em (\d{3}) permite extrair esse valor basta utilizar o $2 nesse caso

console.log(myString2.replace(myRegex, 'my number: $1 - $2'));
*/


// exec() e match()
// OBS: exec cria um cursos e salva aonde parou, precisaria de um loop para continuar
/*
var regexp = /a.c/g;  // /g é para encontrar todas as ocorrencias
var myString = '234abc123 a4c5';

console.log(regexp.exec(myString));
console.log(myString.match(regexp));
*/


// exec()
/*
var regexp = /abc/;
var myString = 'abc def';
var myStringFalse = 'abzc def';

console.log(regexp.test(myString));
console.log(regexp.test(myStringFalse));
*/



// ------------------------------------------------- //
// desafio proposto
/*
function hasDigito(s)
{
    var re = /\d/g;

    return re.test(s);
}
function main(linhas) {
    for(var linha of linhas)
    {
        try
        {
            console.log(hasDigito(linha));
        }catch(error)
        {
            console.log(error.message);
        }
    }
}

// desafio, fortamando e retornando data no formato yyyy-mm-dd
function formatDate(date) {
    return date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1');
}
*/