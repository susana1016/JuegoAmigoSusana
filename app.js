//Variables
const imputAmigo = document.getElementById ("amigo");
const listaAmigos =[];
const ullistaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById ("resultado");

function agregarAmigo(){
    if (imputAmigo.value == ""){
        alert ("Debes ingresar un nombre")
    }
    listaAmigos.push(imputAmigo.value);
    ullistaAmigos.innerHTML += `<li>${imputAmigo.value}</li>`;
};
agregarAmigo();

function sortearAmigo (){
    const random = Math.floor((Math.random() * listaAmigos.length));
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;
};
