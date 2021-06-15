function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
       
        inicia() {
            this.clicarBotoes();
            this.botaoEnter();
        },

        limparDisplay(){
            this.display.value='';
        },
        apagarUmDisplay(){
            this.display.value = this.display.value.slice(0, -1);
        },

        botaoEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizarCalculo();
                }
            });
        },


        realizarCalculo(){
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
        },

        clicarBotoes(){
            document.addEventListener('click', (e) => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')){
                    this.inserirNoDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-limpar')){
                    this.limparDisplay();
                }

                if (elemento.classList.contains('btn-remove')){
                    this.apagarUmDisplay();
                }

                if (elemento.classList.contains('btn-igual')){
                    this.realizarCalculo();
                }
            });
        },

        inserirNoDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();