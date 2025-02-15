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
    cargarLista();
}

function sortearAmigo(){
    //click en botón "sortearAmigo"
    //Validar que el arreglo no esté vacío.
    
    if (listaNombresAmigo.length != 0){
        //Generar un número aleatorio para el índice
        let sortearNumerolista = Math.floor(Math.random()*((listaNombresAmigo.length)+1));
        console.log(sortearNumerolista);
        //Obtener el nombre sorteado.
        listaNombresAmigo[sortearNumerolista];
        console.log(listaNombresAmigo[sortearNumerolista]);
     //Mostrar el resultado agregándolo en la lista
        let ulGanador = document.getElementById('resultado');
        lista.innerHTML = listaNombresAmigo[sortearNumerolista];
    } else {
        while (listaNombresAmigo.length = 0){
        alert('¡Debe ingresar al menos el nombre de un amigo!')
            return;
    }
    }
    return;
    //limpiar el arreglo
    //Deshabilitar el botón de sorteo para reiniciar el juego;
}

function cargarLista(){
    //Lee el nombre de la lista 
    let lista = document.querySelector('ul, .listaAmigos');

    //limpio lista
    lista.innerHTML = "";

    //Recorro el arreglo y agrego los items en la lista de HTML
    listaNombresAmigo.forEach(nombreAmigo => {
        //Creo el elemento li
        let liNombre = document.createElement("li");
        
        //Añado el elemento li
       //liNombre.textContent = nombreAmigo; //Funcionan ambos para insertar elemenetos 
        liNombre.innerHTML = nombreAmigo;  

        //Inserto el "li" en la lista "ul"
        lista.appendChild(liNombre);
    });
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; 
}

function limpiarLista(){
     //Lee el nombre de la lista 
    lista = document.querySelector('ul, .listaAmigos');

     //limpio lista
    lista.innerHTML = ""; 
    return;
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


function listarAmigos(){

    return;
}

//function sortearNumerolista(){
   // return(sortearNumerolista);}

cambiarElemento('h2', 'Escriba el nombre de su Amigo');
//Sobre el campo "Escribe un nombre" se va a añadir el nombre al array nombreAmigo y debe accionarse con el botón añadir
//através de la función "agregarAmigos"