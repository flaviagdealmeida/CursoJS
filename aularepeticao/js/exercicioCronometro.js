const contador = document.querySelector("#contador");
/* refatorando o codigo essa parte não é mais necessária
const iniciar = document.querySelector('#exibirContagem');
const parar = document.querySelector('#pararContagem');
const zerar = document.querySelector('#zerarContagem');*/
const corFonteVermelha = 'rgb(170, 16, 16)';
const corFontePreta = 'rgb(0, 0, 0)';

let iniciarContagem = '';
let segundos = 0;
let horaZerada = '00:00:00';


function cronometro(segundos){
    let second = new Date(segundos * 1000);
    return second.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone: 'UTC'
    });
   
}

function exibeContagem(){
    iniciarContagem = setInterval(function() {
    segundos++;
    contador.style.color = corFontePreta;
    contador.innerHTML = cronometro(segundos);  
   }   ,1000);

}

function pararContagem() {
    clearInterval(iniciarContagem);
    

}

function zerarContagem (){
    pararContagem();
    segundos = 0;
    contador.innerHTML=horaZerada;
    contador.style.color = corFontePreta;
    
}


//criado um evento generico para qq evento de clique

document.addEventListener('click', function(e){
    const elemento = e.target;

    if(elemento.classList.contains('exibirContagem')){
        pararContagem();
        exibeContagem();
       
    }

    if(elemento.classList.contains('pararContagem')){
        pararContagem();
        contador.style.color = corFonteVermelha;
    }

    if(elemento.classList.contains('zerarContagem')){
        zerarContagem();
    }
});
