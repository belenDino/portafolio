//capturo solo UN nodo con ID
let listaProducto = document.getElementById("productos")
console.log(listaProducto.innerHTML)

//capturo nodos, selectores ID o selecciono clase = un solo elemento
let listaProductos = document.querySelector("productos")
console.log(listaProducto.innerHTML)

//Capturo clases y las convierte a un array 
let conteiner = document.getElementsByClassName("contenedor")
console.log(conteiner[0].innerHTML)

//Capturo clases y las convierto en array
let contenedor = document.querySelectorAll(".contenedor")
// setTimeout(()=> {
//     alert(contenedor[0].innerHTML)
// } , 1000);

//crear lista//
let nuevaLista = document.createElement("ul")

document.body.appendChild(nuevaLista);

let listaElemento1 = document.createElement("li");
listaElemento1.textContent = "primer item";
nuevaLista.appendChild(listaElemento1);

let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "segundo item";
nuevaLista.appendChild(listaElemento2);


//-----------------------------------
let futer = document.querySelector("footer")
// alert(futer.innerText)

// futer.innerText = "Algo"
// futer.innerHTML = "<i>algo</i>"


let resta = document.getElementById("restar")
let contador = document.getElementById("contador")
let suma = document.getElementById("sumar")
console.log(resta.innerText)
let counter = 0

contador.innerText = counter

function aumentarMorfi(){
    if (counter < 3){
    counter = counter +1
    contador.innerText = counter
    restar.style.color ="black"
    
    }
    else{
    
    }
}

function disminuirMorfi(){

    if (counter > 0 ){

    
    counter = counter -1
    contador.innerText = counter
    }
    else{
        restar.style.color ="red"
        restar.style.cursor ="not-allowed"
    }
}

console.log(counter)