function Calculadora(){
    this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const elemento = e.target;
            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if (elemento.classList.contains('btn-limpar')) this.limparDisplay(elemento);
            if (elemento.classList.contains('btn-remove')) this.removerUmDisplay(elemento);
            if (elemento.classList.contains('btn-igual')) this.realizarCalculo(elemento);
        });
    };

    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText;
        this.focusBotao();
    };

    this.removerUmDisplay = () => {
        this.display.value = this.display.value.slice(0, -1);
        this.focusBotao();
    }
    
    this.limparDisplay = () => { 
        this.display.value = ' ';
        this.focusBotao();
    }

    this.botaoEnter = () =>  {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.realizarCalculo();
            }
        });
    }

    this.realizarCalculo = () => {
        let conta = this.display.value;
            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    this.limparDisplay();
                    return;
                }
                this.display.value = conta;
            } catch (error) {
                alert('Conta inválida');
                this.limparDisplay();
                return;
            }
    };
    this.focusBotao = () => {
        this.display.focus();
    }


    this.inicia = () => {
        this.capturaCliques();
        this.focusBotao();
    };


}

const calculadora = new Calculadora();
calculadora.inicia();
calculadora.botaoEnter();
