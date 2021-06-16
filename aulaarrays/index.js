//push serve para add um elemento no final da lista 
const alunos = [];
alunos.push('Flavia');
alunos.push('Julia');
alunos.push('Davi');
console.log(alunos);

//unshift serve para add um elemento no inicio da lista
alunos.unshift('Patrik');
alunos.unshift('João');
console.log(alunos);

alunos.pop(); //remover no final
console.log(alunos);

alunos.shift(); //remover no começo
console.log(alunos);

const teste0 = alunos.slice(1,-1); //vai do indice 1 até o penultimo
console.log(teste0);

alunos.push('Tereza');
alunos.push('Helena');

const teste1 = alunos.slice(0,3); //vai do indice 0 até o numero menor que da ultima posição
console.log(teste1); // ou seja de 0 a < 3


//concatenação de arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

//usando concatenar
const array3 = a1.contat(a2);

//usando rest -> ... spread
const array4 = [...array1, ...array2];
console.log(array4);

const array5 = [...array1,'Novo valor', ...array2];
console.log(array5);