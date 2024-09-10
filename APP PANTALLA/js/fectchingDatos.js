function guardar(id) {
     localStorage.setItem("idProducto", id);
    // alert(localStorage.getItem("idProducto")); 
}

fetch('js/medicacion.json')
    .then(response => response.json())
    .then(data => {
        const pillsContainer = document.getElementById('pills-container');
        pillsContainer.innerHTML = '';

        data.forEach(pill => {
            const pillDiv = document.createElement('div');            
            pillDiv.className = 'content';
            pillDiv.innerHTML = `
                            <div class="pill-img" style="cursor:pointer;">
                                <span class="material-symbols-outlined icon_L">medication</span>
                            </div>
                            <div class="pill-text">
                                <a href="pastil.html" onclick="guardar('${pill.id}')"><h2 >${pill.nombre}</h2></a>
                                <h3>${pill.horario}</h3>
                            </div>
                            <div class="pill-check">   
                            <input type="checkbox" id="checkbox-${pill.id}">
                            </div>
                        `;
            pillsContainer.appendChild(pillDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

