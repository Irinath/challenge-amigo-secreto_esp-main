// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica
//  para resolver el problema.

let listaNombresAmigo = [];
let nombreAmigo = '';



function agregarAmigo(){
    alert('Esto es un click');
    //Leer nombre del placeholder
    let nombreAmigo = document.getElementById('amigo');
    //click on botón "Añadir"
    HTMLButtonElement.onclick()
    listaNombresAmigo.push(nombreAmigo);
    //agrega nombre a la lista "nombreAmigo"

}

function sortearAmigos(){
    //click en botón "sortearAmigo"
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
}

function cambiarElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

cambiarElemento('h2', 'Escriba el nombre de su Amigo');
//Sobre el campo "Escribe un nombre" se va a añadir el nombre al array nombreAmigo y debe accionarse con el botón añadir
//através de la función "agregarAmigos"