function guardar(id) {
    localStorage.setItem("idProducto", id);
   alert(localStorage.getItem("idProducto")); 
}

fetch('js/medicacion.json')
   .then(response => response.json())
   .then(data => {
       const pillsContainer = document.getElementById('timeline');
       pillsContainer.innerHTML = '';

       data.forEach(pill => {
           const pillDiv = document.createElement('div');
           pillDiv.className = 'content';
           pillDiv.innerHTML = `
                            <li class="event" data-date="${pill.horario}">
                                    <h3>${pill.nombre}</h3>
                                    <p>${pill.descripcion}</p>
                                </li>
                       `;
           pillsContainer.appendChild(pillDiv);
       });
   })
   .catch(error => console.error('Error fetching data:', error));

