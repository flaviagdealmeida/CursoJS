const numeros = [5, 50, 25, 97, 120, 44, 63, 78, 2, 3, 5, 9];

//a intenção é reduzir a um unico valor
const total = numeros.reduce((acumulador, valor) =>{ return acumulador += valor }, 0);
console.log(total);

const somaPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0){
        acumulador +=valor;
    }
    return acumulador;
}, 0); //o zero serve para inicializar, senao assume o primeiro valor do array

console.log(somaPares);

//retornar o mais velho
const pessoas = [
    {nome:'Flavia', idade:39},
    {nome:'Julia', idade: 11},
    {nome:'Davi', idade: 10},
    {nome:'João', idade: 67},
    {nome:'Tereza', idade: 73},
];

const maisVelho = pessoas.reduce((maiorIdade, valorIdade) => {
   if (maiorIdade.idade > valorIdade.idade) return maiorIdade;
   return valorIdade;
});
console.log(maisVelho);


