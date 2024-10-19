const productos = [
    { nombre: 'Aretes Flor', precio: 8 },
    { nombre: 'Aretes Rombo', precio: 8 },
    { nombre: 'Adorno Navideño - Bombillos', precio: 10 },
    { nombre: 'Adorno Navideño - Bota', precio: 10 },
    { nombre: 'Flores - Rosas', precio: 6 },
    { nombre: 'Flores - Girasoles', precio: 9 }
];

let carrito = [];

const cuponesValidos = {
    "DESCUENTO10": 0.10,  
    "DESCUENTO20": 0.20  
};

function mostrarProductos() {
    console.log('\n--- BIENVENIDO A CREACIONES VYCS ---');
    console.log('\n--- Productos disponibles ---');
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
}

function seleccionarProducto() {
    let seleccion;
    do {
        mostrarProductos(); 
        seleccion = parseInt(prompt('Ingrese el número del producto que desea agregar (o 0 para finalizar):'));
        
        if (seleccion > 0 && seleccion <= productos.length) {
            carrito.push(productos[seleccion - 1]); 
            alert(`${productos[seleccion - 1].nombre} ha sido agregado al carrito.`);
        } else if (seleccion !== 0) {
            alert('Selección inválida. Inténtalo nuevamente.');
        }
    } while (seleccion !== 0);
}

function calcularTotal() {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

function verificarCupon(total) {
    const cupon = prompt('¿Tiene algún cupón de descuento? Ingrese el código (o deje vacío si no tiene):');
    if (cupon in cuponesValidos) {
        const descuento = cuponesValidos[cupon];
        const totalConDescuento = total - (total * descuento);
        alert(`¡Cupón aplicado! El descuento es del ${descuento * 100}%. Total a pagar: $${totalConDescuento.toFixed(2)}`);
        return totalConDescuento;
    } else if (cupon) {
        alert('Cupón no válido. Se procederá a cobrar el monto completo.');
    }
    return total;
}

function procesarPago() {
    let total = calcularTotal();
    if (total === 0) {
        alert('No hay productos en el carrito.');
        return;
    }

    total = verificarCupon(total);

    const confirmacion = prompt(`El total a pagar es $${total.toFixed(2)}. ¿Desea proceder con el pago? (si/no)`);
    if (confirmacion.toLowerCase() === 'si') {
        alert('Pago realizado con éxito. ¡Gracias por su compra!');
    } else {
        alert('Transacción cancelada. Vuelva pronto');
    }
}

function simuladorCompra() {
    console.clear();
    seleccionarProducto();
    procesarPago();
}

simuladorCompra();