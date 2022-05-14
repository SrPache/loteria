let generado = document.getElementById('generado');
let generador = document.getElementById('generador');
let body = document.querySelector('body');

let color = ['dodgerblue', 'green', 'grey', 'rgb(76, 7, 78)', 'darkolivegreen', 'black', 'orangered'];
let index = 0;
let seguir = true;
let n = -1;

while (seguir){
    n = parseInt(prompt('Ingrese un número como rango'));
    if (!isNaN(n) && n>=0){
        seguir = false;
    }
}

function generacion(){

    let random = Math.round(Math.random()*n);

    generado.innerHTML = random;
    
    if (index>=color.length){
        index = 0;
    }

    body.style.backgroundColor = color[index];

    index++;
}

document.oncontextmenu = function(){return false}
generador.onclick = generacion;
