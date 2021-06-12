let num = Number(prompt('Informe um numero'));
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(num)}<br />`;
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)} <br />`;
document.body.innerHTML += `É NaN ${isNaN(num)}<br />`;
document.body.innerHTML += `Arredondar para baixo ${Math.floor(num)}<br />`;
document.body.innerHTML += `Arredondar para cima ${Math.ceil(num)}<br />`;
document.body.innerHTML += `Casas decimais ${parseFloat(num).toFixed(2)}<br />`;