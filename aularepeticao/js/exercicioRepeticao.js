const elementos =[
    {tag: 'p', texto: 'Qualquer coisa', id: 1},
    {tag: 'div', texto: 'Coisa 1', id: 2},
    {tag: 'section', texto: 'Coisa 2', id: 3},
    {tag: 'footer', texto: 'Coisa 3',id: 4},
];

const container = document.querySelector('.container');
const div = document.querySelector('div');

for (let index = 0; index < elementos.length; index++) {
    let {tag, texto} = elementos[index];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
    
}

container.appendChild(div);


const paragrafo = document.querySelector('.paragrafo');
const ps = paragrafo.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColor = estiloBody.backgroundColor;
const color = getComputedStyle(container);
const fontColor = color.getPropertyValue('background-color');
const padding = color.getPropertyValue('padding');

for (const p of ps) {
    p.style.backgroundColor = backgroundColor;
    p.style.color = fontColor;
    p.style.padding = padding;
}

let total = 0;
elementos.forEach(element => {
    total += element.id;
});

console.log(total);