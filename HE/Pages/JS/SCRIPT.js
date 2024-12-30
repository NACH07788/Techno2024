let trabajos = [
  {
    "id": 1111,
    "tittle": "Macetero B-1",
    "price": 2999,
    "description": "lorem"
  },
  {
    "id": 3333,
    "tittle": "Macetero B-3",
    "price": 3999,
    "description": "lorem"
  },
  {
    "id": 4444,
    "tittle": "Macetero B-4",
    "price": 7999,
    "description": "lorem"
  },
  {
    "id": 5555,
    "tittle": "Macetero B-5",
    "price": 5999,
    "description": "lorem"
  }
];

// Mostrar datos en consola
function showWorks() {
  for (let i = 0; i < trabajos.length; i++) {
    console.log(trabajos[i]);
  }
}

// Modificar DOM
let trabajosContainer = document.getElementById('Trabajos');
let contenedor = document.createElement('div');
contenedor.className = 'row';

function armarCartas() {
  trabajos.forEach(trabajo => {
    let cartaBootStrap = document.createElement('div');
    cartaBootStrap.innerHTML =
      `<div class="col-lg-4 col-md-6 mb-4">
          <div class="card">
            <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
              <img src="#" alt="${trabajo.tittle}" />
            </div>
            <div class="card-body">
              <a href="" class="text-reset">
                <h5 class="card-title mb-3">${trabajo.tittle}</h5>
              </a>
              <div>
                <button class="btn btn-primary btn-descripcion" data-id="${trabajo.id}">Ver Descripción</button>
                <p class="descripcion-texto" style="display: none;">${trabajo.description}</p>
              </div>
              <h6 class="mb-3">
                <s>PRECIO LISTA (PROXIMAMENTE)</s><strong class="ms-2 text-danger">$${trabajo.price}</strong>
              </h6>
            </div>
          </div>
       </div>`;
    contenedor.append(cartaBootStrap);
  });
  trabajosContainer.append(contenedor);
  
  document.querySelectorAll('.btn-descripcion').forEach(button => {
    button.addEventListener('click', (e) => {
      const descriptionText = e.target.nextElementSibling;
      if (descriptionText.style.display === 'none') {
        descriptionText.style.display = 'block';
      } else {
        descriptionText.style.display = 'none';
      }
    });
  });
}

