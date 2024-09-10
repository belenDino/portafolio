let medicacion = document.querySelector(".pills")

fetch('js/medicacion.json')
.then(response => {
     return response.json()
    })
.then(data => {
        
       
        resto.innerHTML +=
         /*html*/`<div class="content">
                <a href="pastil.html"></a>
                <div class="pill-img"><span class="material-symbols-outlined icon_L">
                ${data[i].nombre}
                    </span></div>
                <div class="pill-text">
                    <h2><a href="pastil.html">medication</a></h2>
                    <h3>h${data[i].horario}</h3>
                </div>
                <input type="checkbox" id="checkbox1">
            </div>` 
       
    }
)


