Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.

Tareas específicas:

1_Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
Desactivar el botón sortear amigos mientras el array esté en 0
document.querySelector('.botton-draw').setAttribute('disable' o 'enable', 'true');
Verificar que no haya nombres repetidos --> debe hacerse a medida que se ingresan los nombre

2_Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

3_Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

4_Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.


*Adicionales*

Colocar listener al placeholder para ingresar con la tecla "enter".
cambiar el estilo css para que sea más agradable visualmente.
Implementar la función sortearAmigos para limpiar y ordenar código.
.
.

function sortearAmigo(){
    //click en botón "sortearAmigo"
    //Validar que el arreglo no esté vacío.
    if (listaNombresAmigo.length != 0){
       document.querySelector('#botton-draw').setAttribute('disabled', 'false');
        //document.querySelector('.botton-draw').removeAttribute('disabled'); //Probar sino remover

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
        document.querySelector('#botton-draw').setAttribute('disabled', 'true');
    }
    
    //limpiar el arreglo
    limpiarLista();
    //Deshabilitar el botón de sorteo para reiniciar el juego;
}