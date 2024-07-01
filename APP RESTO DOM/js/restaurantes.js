let resto = document.querySelector(".resultados");
let guardarid = (id)=>{
  localStorage.setItem("id",id)
};
fetch("js/restaurantes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach( element => {
        
     
      // almaceno en la variable restaurante el valor de i del FOR
      
        let restaurante = element;
          console.log(restaurante);
        let cartaRestaurante = document.createElement("a");
        cartaRestaurante.setAttribute("id",restaurante.truck_id);
        cartaRestaurante.setAttribute("href","resto.html");
        cartaRestaurante.setAttribute("onClick","guardarid(id)");
        cartaRestaurante.classList.add("resto");
        // almaceno en la variable cartaRestaurante.id el valor de i del restaurante.truck_id
        cartaRestaurante.id = restaurante.truck_id;
        cartaRestaurante.innerHTML = /*html*/ `
        <div class="resto">
        <div class="img-resto"><img src="${restaurante.avatar.src}" alt=""></div>
        <div class="desc-resto">
            <div class="titulo">
            ${restaurante.name}
            </div>
            <div class="info">
            
            ${restaurante.direccion}
               <p> ${restaurante.horario}</p>
            </div>
            <div class="demas">
                <div class="iconos  dos">${restaurante.puntuacion}</div>
                <div class="iconos dos">attach_money attach_money attach_money</div>
            </div>
        </div>
        </div>
        <div class="puntu-resto">${restaurante.puntuacion}</div>
        `;


        /////

        ///
        
        cartaRestaurante.addEventListener("click", function () {
          let idRestauranteSeleccionado = restaurante.truck_id;
          //almaceno en CACHÉ la variable indiceCache el valor de idRestauranteSeleccionado
          localStorage.setItem("indiceCache", idRestauranteSeleccionado);
          console.log(idRestauranteSeleccionado);
        });
  
        resto.appendChild(cartaRestaurante);
      }
    );
});

      

// obtengo desde la caché el valor almacenado en indiceCache
console.log("con localstorage " + localStorage.getItem("indiceCache"));
let k = localStorage.getItem("indiceCache");