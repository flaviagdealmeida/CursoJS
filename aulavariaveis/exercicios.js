const nome = 'Flavia';
const sobrenome = 'Almeida';
const idade = 39;
const peso = 100;
const alturaEmM = 1.73;

let imc = (peso/(alturaEmM*alturaEmM).toFixed(2));

//forma mais eficiente, legivel o moderna de concatenação de texto (interpolation)
console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg. Tem ${alturaEmM} de altura e o IMC é de ${imc}`);

