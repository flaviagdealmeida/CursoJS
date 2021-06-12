/*
    A criação de objetos é similar a criação de um array, porem há a troca
    entre [] do array por um {}.
    Existem varias formas de criar

*/

//padrão factory
function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa1 = criarPessoa('Flavia', 'Almeida', 39);
const pessoa2 = criarPessoa('Julia', 'Almeida', 11);
const pessoa3 = criarPessoa('Davi', 'Almeida', 10);
console.log(pessoa1.nome);

//quando a chave e o valor possuem o mesmo nome, podemos simplificar desta forma
// pois a linguagem compreende a referencia

function criarPessoa(nome, sobrenome, idade) {
    return {nome,sobrenome,idade};
}

const pessoa4 = criarPessoa('Fabi', 'Almeida', 40);
const pessoa5 = criarPessoa('Beatriz', 'Gonçalves', 8);
const pessoa6 = criarPessoa('Eva', 'Gonçalves', 5);
console.log(pessoa5.nome, pessoa6.sobrenome);
