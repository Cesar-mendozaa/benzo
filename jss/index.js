document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', agregarAlCarritoClicked);
    });
});

function agregarAlCarritoClicked(event) {
    const button = event.target;
    const item = button.closest('.item');
    const titulo = item.querySelector('.texto-tarjeta').innerText;
    const precio = item.querySelector('.precio-item').innerText;
    const imagenSrc = item.querySelector('.foto-producto').src;
    agregarItemAlCarrito(titulo, precio, imagenSrc);
    actualizarTotalCarrito();
}

function agregarItemAlCarrito(titulo, precio, imagenSrc) {
    const carritoItems = document.querySelector('.carrito-items');
    const carritoItemNames = carritoItems.querySelectorAll('.carrito-item-titulo');
    for (let i = 0; i < carritoItemNames.length; i++) {
        if (carritoItemNames[i].innerText === titulo) {
            alert('Este producto ya está en el carrito.');
            return;
        }
    }

    const carritoItem = document.createElement('div');
    carritoItem.classList.add('carrito-item');
    carritoItem.innerHTML = `
        <div class="selector-cantidad">
            <button class="btn-restar" onclick="restarCantidad(event)">-</button>
            <span class="carrito-item-cantidad">1</span>
            <button class="btn-agregar" onclick="agregarCantidad(event)">+</button>
        </div>
        <img class="foto-producto" src="${imagenSrc}" width="100" height="100">
        <span class="carrito-item-titulo">${titulo}</span>
        <span class="carrito-item-precio">${precio}</span>
        <button class="btn-danger" onclick="eliminarItemCarrito(event)"><i class="fa-solid fa-trash"></i></button>
    `;
    carritoItems.append(carritoItem);
}

function actualizarTotalCarrito() {
    const carritoItems = document.querySelector('.carrito-items');
    const carritoRows = carritoItems.querySelectorAll('.carrito-item');
    let total = 0;
    carritoRows.forEach(row => {
        const precioElement = row.querySelector('.carrito-item-precio');
        const cantidadElement = row.querySelector('.carrito-item-cantidad');
        const precio = parseFloat(precioElement.innerText.replace('$', '').replace('.', ''));
        const cantidad = parseInt(cantidadElement.innerText);
        total += precio * cantidad;
    });

    total = (total / 1000).toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP'
    });
    document.querySelector('.carrito-precio-total').innerText = total;
}

function eliminarItemCarrito(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.carrito-item').remove();
    actualizarTotalCarrito();
}

function agregarCantidad(event) {
    const buttonClicked = event.target;
    const cantidadElement = buttonClicked.closest('.selector-cantidad').querySelector('.carrito-item-cantidad');
    cantidadElement.innerText = parseInt(cantidadElement.innerText) + 1;
    actualizarTotalCarrito();
}

function restarCantidad(event) {
    const buttonClicked = event.target;
    const cantidadElement = buttonClicked.closest('.selector-cantidad').querySelector('.carrito-item-cantidad');
    if (parseInt(cantidadElement.innerText) > 1) {
        cantidadElement.innerText = parseInt(cantidadElement.innerText) - 1;
    }
    actualizarTotalCarrito();
}
