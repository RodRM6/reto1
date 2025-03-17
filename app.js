// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let cont = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = (document.getElementById('amigo')); // Asegúrate de que el input tenga el id 'inputNombre'
    let nombre = inputNombre.value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    else{
    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = '';
    console.log(amigos);
    asignarTextoElemento('p',`Amigo ${cont}, ${nombre} `);
    cont ++;
    }
    return;
}
function agregarAmigosALista() {
    // Obtener el elemento de la lista
    let listaAmigos = document.getElementById('listaAmigos'); // Asegúrate de que la lista tenga el id 'listaAmigos'

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Agregar elementos a la lista
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.push(li);
    }
    return;
}
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agregue algunos nombres.');
        return;
    }
    else{
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado'); // Asegúrate de que el elemento tenga el id 'resultado'
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
    }
    return;
}
function Condiciones_iniciales() {
    agregarAmigo();
    agregarAmigosALista();
    sortearAmigo();
    
}
Condiciones_iniciales();