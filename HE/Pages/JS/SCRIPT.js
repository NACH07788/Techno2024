

let trabajos = [{
    "id": 1111,
    "tittle": "Macetero B-1",
    "price": 2.999,
    "description": "lorem"
},
{
    "id": 3333,
    "tittle": "Macetero B-3",
    "price": 3.999,
    "description": "lorem"
},
{
    "id": 4444,
    "tittle": "Macetero B-4",
    "price": 7.999,
    "description": "lorem"
},
{
    "id": 5555,
    "tittle": "Macetero B-5",
    "price": 5.999,
    "description": "lorem"
}
    //Para probar la carga

]

//Modificar DOM
function showWorks() {
    for(let i = 0; i < trabajos.length; i++) {
        console.log(trabajos[i]);
    }
}



document.getElementById('Trabajos');
let contenedor = document.createElement('div');
contenedor.className = 'row';
let cartaBootStrap = document.createElement('div');
cartaBootStrap.className = 'col-lg-4 col-md-6 mb-4';

contenedor.innerHTML =
    `<div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                <img src="..\CSS\Productos\MACETAS\MACETERO_B4.jpeg" class="w-100" />
              </div>
              <div class="card-body">
                <a href="" class="text-reset">
                  <h5 class="card-title mb-3">MACETERO_B4</h5>
                </a>
                <a href="" class="text-reset">
                  <p>REJAS</p>
                </a>
                <h6 class="mb-3">
                  <s>$6299</s><strong class="ms-2 text-danger">$4000</strong>
                </h6>
              </div>
            </div>
          </div>
          
          
          `;


contenedor.appendChild(card);       