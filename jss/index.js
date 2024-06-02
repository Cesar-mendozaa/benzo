//varieble que mantiene el estado visible del carrito.
var carritoVisible = false;

//Esperamos que todos los elementos de la pagina se carguen para continuar con el script.
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i<botonesEliminarItem.length;i++){
        var button = botonesEliminarItem[i];
        button.addEventListener('click',eliminarItemCarrito);
    }
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i<botonesSumarCantidad.length;i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
    }
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0; i<botonesRestarCantidad.length;i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
    }
    var botonesAgregarAlCarrito = document.getElementsByClassName('agregar-carrito');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
       var button = botonesAgregarAlCarrito[i];
       button.addEventListener('click',agregarAlCarritoClicked); 
    }
}

function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    actualizarTotalCarrito();


    ocultarCarrito();
}
function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;

    for(var i=0; i < carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        console.log(precioElemento);

        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        console.log(precio);
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        console.log(cantidad);
        total = total + (precio * cantidad);
    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es") + ',00';
}
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if (carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;

        var items = document.getElementsByName('contenedor-items')[0];
        items.style.width = '60%';

    }
}

function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;

    actualizarTotalCarrito();
}
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual--;

      if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;

        actualizarTotalCarrito();
      }  
    
}

function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('texto-tarjeta')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);
}
function agregarItemAlCarrito(titulo,precio,imagenSrc){
    var item = document.createElement('div');
    item.classList.add = 'item';
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    var  nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i = 0; i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
               
    }


    var itemsCarritoContenido = `
    <div class="carrito-item">
                    <img src="https://lh3.googleusercontent.com/proxy/kVM_-admjTNRNckY_vLFti-Dhh4EIz8psPEpyi3_HxD5c_TdbP2OFoQKBTGetBzmpPJV2w8Z9vznUnxjKGfeT-dKFijiHjrwLk8ltzqurB05R4C-K_PyKIrWR8frJ-g"
                        alt="" width="80px">
                    <div class="carrito-item-detalles">
                        <span class="carrito-item-titulo">Burrito de frijoles</span>
                        <div class="selector-cantidad">
                            <i class="fa-solid fa-minus restar-cantidad"></i>
                            <input type="text" value="2" class="carrito-item-cantidad" disabled>
                            <i class="fa-solid fa-plus sumar-cantidad"></i>
                        </div>
                        <span class="carrito-item-precio">$22.000</span>
                    </div>
                    <span class="btn-eliminar">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </div>
    `
    item.innerHTML = itemsCarritoContenido;
    itemsCarrito.append(item);
}
