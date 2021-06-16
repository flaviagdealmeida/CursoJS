const numeros = [5, 50, 25, 97, 120, 44, 63, 78, 2, 3, 5, 9];

const tudoJunto = numeros
    .filter(valor => valor % 2 === 0) //somente pares
    .map(valor => valor * 2) //pares em dobro
    .reduce((total, valor) => total + valor); // soma todos os valores

console.log(tudoJunto);