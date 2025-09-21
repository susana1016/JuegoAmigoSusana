const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    inputAmigo.value = ""; // limpiar el campo
}

function mostrarLista() {
    ulListaAmigos.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        ulListaAmigos.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Ya no quedan amigos por asignar.");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];

    // mostrar resultado
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;

    // eliminarlo para que no vuelva a salir
    listaAmigos.splice(random, 1);
}
