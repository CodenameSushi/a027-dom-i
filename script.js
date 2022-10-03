const frutas = ["laranja", "limão", "uva"];

let listaFrutas = document.getElementsByTagName("li")

let fruta = document.getElementById("fruta");

for (let tamanhaArray in frutas ) {
    listaFrutas[tamanhaArray].innerHTML = frutas[tamanhaArray]
}

// document.getElementById("fruta-1").innerHTML = frutas[0];
// document.getElementById("fruta-2").innerHTML = frutas[1];
// document.getElementById("fruta-3").innerHTML = frutas[2];

// function imprimeFruta() {
//     console.log(fruta.value)
//     document.getElementById("fruta-4").innerHTML = fruta.value
//     document.getElementById("fruta").value = "";

// }

function imprimeFruta() {
    console.log(fruta.value)
    const lista = document.getElementById("lista-de-frutas")
    lista.innerHTML += `<li>${fruta.value}</li>`
    fruta.value = ""
   }

// document.getElementById("fruta-4").innerHTML = fruta.value
// document.getElementById("fruta").value = "";