const form = document.querySelector('#formulario');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const peso = e.target.querySelector('#peso');
    const altura = e.target.querySelector('#altura');

    const valorPeso = Number(peso.value);
    const valorAltura = Number(altura.value);

    if(!valorPeso){
        setResultado('Peso invalido', false);
        return;
    }
    if(!valorAltura){
        setResultado('Altura invalido', false);
        return;
    }

    const imc = getIMC(valorPeso, valorAltura);
    const classIMC = classificaIMC(imc);

    const msg = `Seu imc é ${imc} e a classificação é: ${classIMC}`;

    setResultado(msg, true);


});

function classificaIMC(imc){
    const classificado = ['Abaixo do peso \u{1F610}', 'Peso normal \u{1F600}', 'Sobrepeso\u{1F62F}', 'Obesidade grau 1 \u{1F62D}', 'Obesidade grau 2 \u{1F632}', 'Obesidade grau 3 \u{1F975}'];

    if (imc > 39.9) return classificado[5];
    if (imc >= 34.9) return classificado[4];
    if (imc >= 29.9) return classificado[3];
    if (imc >= 24.9) return classificado[2];
    if (imc >= 18.5) return classificado[1];
    if (imc < 18.5) return classificado[0];



}


function getIMC(peso, altura){
    const imc = (peso/(altura*altura));
    return imc.toFixed(2);
}


function putParagrafo(){
    const p = document.createElement('p');
    return p;
}



function setResultado(msg, isValid){
    const result = document.querySelector('#result');
    result.innerHTML = '';
    
    const p = putParagrafo();

    isValid ?  p.classList.add('resultado'):  p.classList.add('bad');

    p.innerHTML = msg;
    result.appendChild(p);
    

}
