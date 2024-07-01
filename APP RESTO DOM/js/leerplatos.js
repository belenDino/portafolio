let platos = document.querySelector(".contenedor_tarjeta")

fetch('js/restaurantes.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        data.forEach(element => {
            if (element.truck_id == localStorage.getItem("id")) {
                element.menu.forEach(plato => {
                    console.log(plato)
                    let tarjeta = document.createElement("a");
                    tarjeta.classList.add("tarjeta");
                    tarjeta.id = element.truck_id;
                    tarjeta.innerHTML = `
                                        <div class="foto pr">
                                            <img src="${plato.src}" alt="" class="img_fit">
                                            <div class="tag pa">${plato.price}</div>
                                        </div>
                                        <div class="plato_desc pd25">
                                            <h4>${plato.name}</h4>
                                            <div class="ing">${plato.description}</div>
                                             ingredients:
                                               <span>${plato.ingredients}</span>
                                        </div>
                   `; 

                   platos.append(tarjeta); 
                   

                })
            }
            
        });
    })



