const productos = [
    { nombre: 'Aretes Flor', precio: 8 },
    { nombre: 'Aretes Rombo', precio: 8 },
    { nombre: 'Adorno Navideño - Bombillos', precio: 10 },
    { nombre: 'Adorno Navideño - Bota', precio: 10 },
    { nombre: 'Flores - rosas', precio: 6 },
    { nombre: 'Flores - girasoles', precio: 9 }
]

function mostrarProductos() {
    console.log("Bienvenido a Creaciones VYCS");
    console.log("Lista de productos:");
    console.log("1. Producto: Aretes Flor - Costo: $8");
    console.log("2. Producto: Aretes Rombo - Costo: $8");
    console.log("3. Producto: Adorno Navideño - Bombillos - Costo: $10");
    console.log("4. Producto: Adorno Navideño - Bota - Costo: $10");
    console.log("5. Producto: Flores - rosas - Costo: $6");
    console.log("6. Producto: Flores - girasoles - Costo: $9");
}

function obtenerPrecioProducto(opcion) {
    if (opcion === 1) return 8;
    if (opcion === 2) return 8;
    if (opcion === 3) return 10;
    if (opcion === 4) return 10;
    if (opcion === 5) return 6;
    if (opcion === 6) return 9;
    return 0; 
}

function main() {
    let costoTotal = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        mostrarProductos();
        
        let opcion = parseInt(prompt("Selecciona el número del producto que deseas (1, 2, 3, 4, 5, o 6):"));
        
        if (opcion >= 1 && opcion <= 6) {
            costoTotal += obtenerPrecioProducto(opcion);
        } else {
            console.log("Opción no válida. Intenta de nuevo.");
            continue;
        }
        
        let respuesta = prompt("¿Deseas seleccionar otro producto? (si/no):").toLowerCase();
        if (respuesta !== "si") {
            seguirComprando = false;
        }
    }
    
    console.log("El costo total de los productos seleccionados es: $" + costoTotal.toFixed(2));

    let pagar = prompt("¿Deseas pagar el valor? (si/no):").toLowerCase();
        if (pagar === "si") {
            console.log("Gracias por su compra");
        } else if (pagar === "no"){
        console.log("Vuelve pronto");
        }
}

main();
