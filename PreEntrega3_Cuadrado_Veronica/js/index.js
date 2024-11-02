
const productos = [
    { id: 1, nombre: 'Aretes Flor', precio: 8, imagen: './assets/img/arete1.jpg' },
    { id: 2, nombre: 'Aretes Rombo', precio: 8, imagen: './assets/img/arete2.jpg' },
    { id: 3, nombre: 'Adorno Navideño - Bombillos', precio: 10, imagen: './assets/img/navidad2024.jpg' },
    { id: 4, nombre: 'Adorno Navideño - Gatos', precio: 10, imagen: './assets/img/gatos.jpg' },
    { id: 5, nombre: 'Flores - Rosas', precio: 6, imagen: './assets/img/promo.jpg' },
    { id: 6, nombre: 'Flores - Girasoles', precio: 9, imagen: './assets/img/gira.jpg' }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const contenedorProductos = document.querySelector('.contenerdor-cards1');

function mostrarProductos() {
    contenedorProductos.innerHTML = '';
    productos.forEach(producto => {
        const productoCard = document.createElement('article');
        productoCard.classList.add('card');
        productoCard.innerHTML = `
            <div class="card-img">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="card-info">
                <h3>${producto.nombre}</h3>
                <p>Valor: $${producto.precio}</p>
                <button class="btn-agregar" data-id="${producto.id}">Agregar al Carrito</button>
            </div>
        `;
        contenedorProductos.appendChild(productoCard);
    });
}

contenedorProductos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-agregar')) {
        const idProducto = parseInt(e.target.getAttribute('data-id'));
        agregarAlCarrito(idProducto);
    }
});


function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
        calcularTotal();
        alert(`${producto.nombre} ha sido agregado al carrito.`);
    }
}


function mostrarCarrito() {
    const divCarrito = document.getElementById('carrito') || crearDivCarrito();
    divCarrito.innerHTML = '<h3>Carrito de Compras</h3>';
    if (carrito.length === 0) {
        divCarrito.innerHTML += '<p>El carrito está vacío.</p>';
        return;
    }

    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto-carrito');
        productoDiv.innerHTML = `
            <p>${producto.nombre} - $${producto.precio}</p>
            <button class="btn-eliminar" data-index="${index}">Eliminar</button>
        `;
        divCarrito.appendChild(productoDiv);
    });


    divCarrito.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-eliminar')) {
            const indexProducto = parseInt(e.target.getAttribute('data-index'));
            eliminarDelCarrito(indexProducto);
        }
    });
}


function crearDivCarrito() {
    const divCarrito = document.createElement('div');
    divCarrito.id = 'carrito';
    document.querySelector('main').appendChild(divCarrito);
    return divCarrito;
}


function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    calcularTotal();
}


function calcularTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    let totalDiv = document.getElementById('total') || crearDivTotal();
    totalDiv.textContent = `Total a Pagar: $${total.toFixed(2)}`;
}


function crearDivTotal() {
    const totalDiv = document.createElement('div');
    totalDiv.id = 'total';
    document.querySelector('main').appendChild(totalDiv);
    return totalDiv;
}


function crearBotonPagar() {
    let btnPagar = document.getElementById('btn-pagar');
    if (!btnPagar) {
        btnPagar = document.createElement('button');
        btnPagar.id = 'btn-pagar';
        btnPagar.textContent = 'Pagar';
        document.querySelector('main').appendChild(btnPagar);

        btnPagar.addEventListener('click', () => {
            if (carrito.length === 0) {
                alert('El carrito está vacío. Agrega productos antes de pagar.');
                return;
            }

            alert('Pago realizado con éxito. ¡Gracias por su compra!');
            carrito = [];
            localStorage.removeItem('carrito');
            mostrarCarrito();
            calcularTotal();
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    mostrarCarrito();
    calcularTotal();
    crearBotonPagar();
});
