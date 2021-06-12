const input = document.querySelector('.input-tarefa');
const btn = document.querySelector('.btn-tarefa');
const lista = document.querySelector('.tarefas');


function criaLi(){
    const li = document.createElement('li');
    return li;
}

function limpaInput(){
    input.value = '';
    input.focus();
}

function apagarTarefa(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa!');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    lista.appendChild(li);
    limpaInput();
    apagarTarefa(li);
    salvarTarefas();

}

function salvarTarefas(){
    const liTarefas = lista.querySelectorAll('li');
    const listaTarefas = [];

    for (const tarefas of liTarefas) {
        let tarefasTexto = tarefas.innerText;
        tarefasTexto = tarefasTexto.replace ('Apagar', '').trim();
        listaTarefas.push(tarefasTexto);
    }

    const tarefasJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for (const tarefa of listaTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

btn.addEventListener('click', function(){
    if(!input.value) return;
    criaTarefa(input.value);
});


input.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(!input.value) return;
        criaTarefa(input.value);
    }
});

document.addEventListener('click', function(e){
    const elemento = e.target;

    if (elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();

    }
});