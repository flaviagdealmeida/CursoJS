const numeros = [5, 50, 25, 97, 120, 44, 63, 78, 2, 3, 5, 9];

function callbackFilter(valor){
    return valor > 10;
}
const filtroNumeros = numeros.filter(callbackFilter);
console.log(filtroNumeros);

//refatorando 1
const numerosFiltrados = numeros.filter(function(valor){
    return valor > 25;
});

console.log(numerosFiltrados);

//refatorando 2
const numerosFiltrados2 = numeros.filter((valor) => {
    return valor > 50;
});

console.log(numerosFiltrados2);

//refatorando 3
const numerosFiltrados3 = numeros.filter(valor => valor > 50);
console.log(numerosFiltrados3);

//array de objetos
const pessoas =[
    {nome:'Flavia', idade:39},
    {nome:'Julia', idade: 11},
    {nome:'Davi', idade: 10},
    {nome:'João', idade: 67},
    {nome:'Tereza', idade: 73},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >=5);
console.log(pessoasComNomeGrande);