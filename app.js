
let numeroSecreto=0;
let intentos =0;




function asignarTextoElemento(elemento,texto) {
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento() {
    let numeroDeUsario=parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsario===numeroSecreto) {
        asignarTextoElemento('p ','acertastes el numero');
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    }else{
        if (numeroDeUsario>numeroSecreto) {
            asignarTextoElemento('p', `Acertastes el numero en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
            
        }else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
}
function generarNumeroSecreto() {
   return Math.floor(Math.random()*10)+1;
   
    
}


function limpiarCaja() {
  let valorCaja =document.querySelector('#valorUsuario').value='';
  
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','juego de el numero secreto');
    asignarTextoElemento('p','indica un numero de el 1 al 10');
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpaiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
    
}

condicionesIniciales();

 function tablaDemultiplicar(numero) {
    
    
 }