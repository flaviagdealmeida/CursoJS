
/* esse metodo de criação não é funcional
let arrayPessoas = [];

let nomeP = document.getElementById('nome').textContent;
let sobrenomeP = document.getElementById('sobrenome').textContent;
let pesoP = document.getElementById('peso').textContent;
let alturaP = document.getElementById('altura').textContent;
*/
function Pessoas() {
    const form = document.querySelector('.form'); // recupera os dados e eventos do formulario
    const lista = document.querySelector('.lista');
    const pessoas = [];
    
    form.addEventListener('submit', recebePessoaForm); // não precisa do "on" na frente do evento
           
    function recebePessoaForm(event) {
        event.preventDefault(); // recupera o estado do form
        const nome = form.querySelector('#nome'); //recupera a informação da classe, name ou id de um input
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        pessoas.push({ //add elementos ao array criando tb um objeto (não esquecer de por value)
            nome: nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        });

           //metodo nao funcional de imprimir os dados do array na tela 
        lista.innerHTML += `<p> ${nome.value}, ${sobrenome.value},  ${peso.value}, ${altura.value} <\p>`; 
        
      
    }
   


}


Pessoas();