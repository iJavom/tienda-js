let productos =[];

function cargarProductos(){
    let seccionProductos = document.querySelector("#seccion-articulos");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.com/products");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        productos = xhr.response;
        let indice = 0;
        while(indice < productos.length){
            let productoTarjeta = `<div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${productos[indice].image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${productos[indice].title}</h5>
                  <p class="card-text">${productos[indice].description}</p>
                  <p class="card-text"><small class="text-body-secondary">$ ${productos[indice].price}</small></p>
                </div>
              </div>
            </div>
          </div>`
            
            seccionProductos.insertAdjacentHTML("beforeend",productoTarjeta);
            indice++;
        }
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
    
}

cargarProductos();