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