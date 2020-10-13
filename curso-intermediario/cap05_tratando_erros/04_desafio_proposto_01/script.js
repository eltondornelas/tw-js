function inverterString(s) {
    try {
        console.log(s.split('').reverse().join(''));
    } catch (error) {
        console.log(error.message);
        console.log(s);
    }
}

function main(valor) {
    inverterString(eval(valor));
}