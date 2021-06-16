/* função retorna valores de forma mais "preguiçosa", não é entregue tudo de uma vez
como se houvesse uma pausa na execução.*/

function * geradora1(){
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}

const g1 = geradora1();
console.log(g1.next()); //possui na saída done: false. Significa que existem mais item para serem executados
console.log(g1.next().value);

// as funções geradoras podem invocar umas as outras basta chamá-las através de yield

function* geradora2(){
    yield* geradora1();
    yield 'valor 4';
}

const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());