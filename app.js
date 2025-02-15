// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica
//  para resolver el problema.

let listaNombresAmigo = [];
let nombreAmigo = '';



function agregarAmigo(){
    //Leer nombre del placeholder
    let nombreAmigo = document.getElementById('amigo').value.trim();
    //click on botón "Añadir"
    //listaNombresAmigo.push(nombreAmigo);
    console.log(listaNombresAmigo); //Eliminar
    console.log(contarCaracteres(nombreAmigo)); //Eliminar
    //limpiarCaja();
    //Verificar que el campo no esté vacío
    if (contarCaracteres(nombreAmigo) >= 2){
        //agrega nombre a la lista "nombreAmigo"
    listaNombresAmigo.push(nombreAmigo);
    console.log(listaNombresAmigo);
    } else {       
        //alert('El nombre debe contener al menos 2 (dos) letras');
        cambiarElemento('h2', 'El nombre debe contener al menos 2 (dos) letras');
        limpiarCaja();
        return;
    }
    limpiarCaja();
    cambiarElemento('h2', 'Escribe el nombre de tu amigo');
}

function sortearAmigos(){
    //click en botón "sortearAmigo"
}

function cargarLista(){
    //Lee el nombre de la lista 
    //y lo agrega en el HTML en el elemneto "ul"
}

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; 
}

function cambiarElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function contarCaracteres(nombreAmigo) {
    //Cuenta los caracteres del nombre del amigo ingresado
    let caracteres = nombreAmigo.length;
    //retorna el número
    return (caracteres);
} 

cambiarElemento('h2', 'Escriba el nombre de su Amigo');
//Sobre el campo "Escribe un nombre" se va a añadir el nombre al array nombreAmigo y debe accionarse con el botón añadir
//através de la función "agregarAmigos"