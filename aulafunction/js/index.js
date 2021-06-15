//formas de criação de uma função
//sem parametro
function teste() {
   let soma = 2+3;
}

//com parametro
function teste(x) {
    let valor = x;
}

//com retorno
function teste(x, y) {
    return x + y;
}
console.log('Total =>', teste(2, 3));

//com armazenamento de dados em variavel
const calculo = function (x, y) {
    return x + y;
};
console.log('Soma =>', calculo(4, 5));

//Através de arrow function padrão necessita de (), {}, ; e return
const raiz = (x) => {
    return x ** 0.5;
};

console.log('Raiz =>', raiz(16));

//Através de arrow function padrão
//quando possui apenas um parametro não precisa de () e nem de {}
const raiz2 = x => x ** 0.5;
console.log('Raiz =>', raiz2(9));