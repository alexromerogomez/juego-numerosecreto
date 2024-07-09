//let titulo = document.querySelector('h1'); // aquí creamos una variable llamada título seleccionando el método document.queryselector. Indicamos h1 que hace referencia al título en el html
//titulo.innerHTML = 'Juego del número secreto'; // aquí asignamos el título al juego

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Escribe un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // aquí creamos una variable llamada título seleccionando el método document.queryselector. Indicamos h1 que hace referencia al título en el html
elementoHTML.innerHTML = texto; // aquí asignamos el título al juego
}

function verificarIntento() {
    //alert('Clic desde el botón');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto); // el triple igual se emplea para forzar la comparación en los tres tipos de datos
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else { 
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else { 
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    
    return;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto...!');
    asignarTextoElemento('p',`Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicilizar el número de intentos
    condicionesIniciales();
    //deshabilitar el btón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los número

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    } else {

        // si el número generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();

//asignarTextoElemento('h1','Juego del número secreto...!');
//asignarTextoElemento('p','Indica un número de 1 a 10...!');
// ctrl f para buscar dentro java scrip