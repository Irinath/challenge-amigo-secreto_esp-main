// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica
//  para resolver el problema.

let listaNombresAmigo = [];
let nombreAmigo = '';



function agregarAmigo(){
    //Leer nombre del placeholder
    let nombreAmigo = document.getElementById('amigo').value.trim();
    amigo.focus()
    //Verificar que el campo no esté vacío
    if (contarCaracteres(nombreAmigo) >= 2){
        //agrega nombre a la lista "nombreAmigo"
        listaNombresAmigo.push(nombreAmigo);
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
    if (listaNombresAmigo.length > 0){
        //Generar un número aleatorio para el índice
        let sortearNumerolista = Math.floor(Math.random()*(listaNombresAmigo.length));
       
        //Obtener el nombre sorteado.
        let ulGanador = document.getElementById('resultado'); //listaNombresAmigo[sortearNumerolista];
     //Mostrar el resultado agregándolo en la lista
        ulGanador.innerHTML = `<li>El amigo secreto elegido es: <strong> ${listaNombresAmigo[sortearNumerolista]}</strong></li>`;
        limpiarLista(); //limpio el arreglo
    } else {
        while (listaNombresAmigo.length = 0){
        alert('¡Debe ingresar al menos el nombre de un amigo!')
            return;
    }
    }
    return;
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
    lista.innerHTML = " ";
    listaNombresAmigo = [];
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


cambiarElemento('h2', 'Escribe el nombre de tu amigo');
//Sobre el campo "Escribe un nombre" se va a añadir el nombre al array nombreAmigo y debe accionarse con el botón añadir
//através de la función "agregarAmigos"