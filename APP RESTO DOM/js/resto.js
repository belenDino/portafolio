fetch('js/restaurantes.json')
.then(response => {
     return response.json()
    })

.then(data => {
    data.forEach(plato => {
        if(plato.truck_id==localStorage.getItem("id")){
            document.querySelector(".resto_titulo").querySelector("h3").innerText = plato.name
            document.querySelector("span").querySelector("h5").innerText = plato.bio
            document.querySelector(".resto_precio").innerText = plato.puntuacion
            document.querySelector(".resto_image").querySelector(".img_fit").src = plato.cover_photo.src
            
        }
    });  
})

