let platos = document.querySelector(".plato")

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
                                               
                                                    <img class="img_fit" src="${plato.src}" alt="">
                                                    <div class="resto_precio centgrid pa sombra">${plato.price}}</div>
                                                </section>
                                                <section class="resto_desc">
                                                    <div class="flex100">
                                                        <div class="resto_titulo">
                                                            <h3>${plato.name}</h3>
                                                        </div>
                                                    </div>
                                                    <span>
                                                        <h5></h5>
                                                        ${plato.description}
                                                    </span>
                   `; 

                   platos.append(tarjeta); 
                   

                })
            }
            
        });
    })

