let idLeido = localStorage.getItem("idProducto");

fetch('js/medicacion.json')
    .then(response => response.json())
    .then(data => {

        if (idLeido) {
            const medicamentoEncontrado = data.find(pill => pill.id === idLeido);

            if (medicamentoEncontrado) {
                document.querySelector('#datosPasti').innerHTML = `
                <div class="uno" id="datosPasti">
            <div class="iconos">
                <a href="index.html" class="volver material-symbols-outlined"> 
                    arrow_back
                    </a>
              
                
                    <span class="edit material-symbols-outlined">
                        edit
                        </span>
            </div>

            <div class="pasti-data">
                <div class="img-pasti">
                    <span class="material-symbols-outlined icon_L">
                        pill
                        </span>
                </div>
                <div class="nom-pasti">
                    <p>${medicamentoEncontrado.nombre}</p>
                    <i>${medicamentoEncontrado.descripcion}</i>
                </div>
            </div>

            <div class="pasti-time">
                <div class="dia">
                   
                    <span class="material-symbols-outlined icon_M">
                        event
                        </span>
                    <p>${medicamentoEncontrado.duracion}</p>
                        
                </div>
                <div class="time">
                    
                    <span class="material-symbols-outlined icon_M">
                        schedule
                        </span>
                       <p>x${medicamentoEncontrado.dosisPorDia}</p>
                </div>
                
            </div>
            
        </div>
                `
                

            } else {
                alert('No encontré la pastilla con el id ' + idLeido);
            }
        } else {
            console.log('No hay id almacenado en localStorage.');
        }
    })
    .catch(error => console.error('Error fetching data:', error));


       // document.querySelector('#datosPasti').innerHTML = '';