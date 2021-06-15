/* na utilização de passagem de parametros, caso um valor não seja passado, não há problemas
pois o JS cria um array chamado arguments que sustenta os dados passados caso não seja 
declarado, mas apenas quando declaração uma função com function.
*/

/*function funcao1(){
    let total = 0;
    for (let argumentos of arguments){
        total += argumentos;
    }
    console.log(total);
}
funcao1(1, 2, 3, 4, 5, 6, 7);*/

/*
Mesmo que a gente passe menos argumentos que a quantidade de parametros, não dá erro 
function funcao2(a, b, c, d, e){
   console.log( a , b , c, d , e);
}
funcao2(1, 2, 3);*/

//IIFE esse tipo de função é invocada e executada imediatamente. 
//Está protegida do escopo global da aplicação

(function(){
    //podemos ter aninhamento de funções dentro desse escopo.
    //esse modelo possui o mesmo padrão usado no jQuery
    const sobrenome = 'Almeida';

    function nomeCompleto(nome){
        return nome + ' ' + sobrenome;
    }

    function primeiroNome(){
        console.log(nomeCompleto('Flávia'));
    }

    primeiroNome();
})();