let resta = document.getElementById("restar")
let contador = document.getElementById("contador")
let suma = document.getElementById("sumar")

let counter=0

contador.innerText = counter

function aumentarMorfi(){
    if (counter <3){
    counter = counter +1
    contador.innerText = counter
    restar.style.color ="black"
    
    }
    else{
    
    }
}

function disminuirMorfi(){

    if (counter >0 ){

    
    counter = counter -1
    contador.innerText = counter
    }
    else{
        restar.style.color ="red"
        restar.style.cursor ="not-allowed"
    }
}

console.log(counter)