let resto = document.querySelector(".resultados")

fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
      for (let i=0; i < 20; i++){

        let puntu = ""
      
        if (data[i].puntuacion === "4"){
            puntu = "star star star star"
        }
        else if(data[i].puntuacion === "3"){
            puntu= "star star star"
        }
        else if(data[i].puntuacion === "2"){
            puntu= "star star"
        }
        else {
            puntu= "star"
        }
    
        
       
        resto.innerHTML +=
         /*html*/`<a href="resto.html" class="resto">
                <div class="img-resto"><img src="${data[i].avatar.src}" alt=""></div>
                <div class="datos-resto">
                    <div class="titulo">
                        ${data[i].name}
                    </div>
                    <div class="info">
                    
                    ${data[i].direccion}
                       <p> ${data[i].horario}</p>
                    </div>
                    <div class="demas">
                        <div class="iconos  dos">${puntu}</div>
                        <div class="iconos dos">attach_money attach_money attach_money</div>
                    </div>
                </div>
                <div class="puntu-resto">${data[i].puntuacion}</div>
            </a>` 
       
    }
})


