let categorias = ["electronics","jewelery","men's clothing","women's clothing"];

function iniciarPagina(){
    debugger;
    let seccionCategoria = document.querySelector("#seccion-categoria");
    let indice = 0;
    while(indice < categorias.length){
        let categoriaDiseno = `<div class="col-md-3">
        <div class="card rounded-pill">
            <div class="card-body text-center">
              <button class="btn btn-warning rounded-pill">${categorias[indice]}</button>
            </div>
          </div>
    </div>`
        
        seccionCategoria.insertAdjacentHTML("beforeend",categoriaDiseno);
        indice++;
    }
}

iniciarPagina();