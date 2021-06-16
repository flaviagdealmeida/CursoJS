const numeros = [5, 50, 25, 97, 120, 44, 63, 78, 2, 3, 5, 9];
const numerosEmDobro = numeros.map(valor => valor*2);

console.log(numerosEmDobro);


const pessoas = [
    {nome:'Flavia', idade:39},
    {nome:'Julia', idade: 11},
    {nome:'Davi', idade: 10},
    {nome:'João', idade: 67},
    {nome:'Tereza', idade: 73},
];

const nomes = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({idade: obj.idade})); //prestar atenção na declaração e fechamento das chaves
console.log(nomes);