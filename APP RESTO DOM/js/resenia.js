let platos = document.querySelector(".contenedor_tarjeta")
console.log(localStorage.getItem("id"))
fetch('js/restaurantes.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(element => {
            if (element.truck_id == localStorage.getItem("id")) {
                element.reseña.forEach(plato => {
                 
                    let tarjeta = document.createElement("a");
                   
                    tarjeta.classList.add("tarjeta");
                    tarjeta.id = element.truck_id;
                    tarjeta.innerHTML = `
                                        <div class="foto pr">
                                                <img src="${plato.src}"" alt="" class="img_fit2">
                                                <div class="tag pa sombra">${plato.puntuacion}<div class="iconos">star</div></div>
                                            </div>
                                            <div class="plato_desc pd25">
                                                <h4>${plato.nombre}</h4>
                                                <br>
                                                <span>${plato.opinion}</span>
                                            </div>  
                   `;

                    platos.append(tarjeta);


                })
            }

        });
    })
