/**EL USUARIO VA A COMPRAR PRODUCTOS
 *  - iniciar sesión
 *  - Card con producos y precio
 *  - botón de comprar
 *  - producto se cargue en un carrito de compras y se almacene en este
 *  - sumar los diferentes productos que seleccione el usuario
 *  - Mostrar el valor final 
 *  - forma de pagar el producto
 *  - Vaciar el carrito de compras
 */

let clave;
let intentos = 0;
const MAX_INTENTOS = 3;
let suma = 0;
let producto1 = 5;
let producto2 = 8;
let producto3 = 10;

do{
    clave = prompt("ingresa la contrasena '123'");
    intentos ++;

    if (clave === '123'){
        alert("contrasena correcta")
        
        do{
            imput = prompt("Seleccione el producto que desee comprar: producto1 - valor $5, producto2 - valor $8, producto3 - valor $10. Si desea terminar la seleccion escriba la palabra 'comprar'.")
                
            if(imput.toLowerCase() === 'producto1'){
                suma = producto1;
            }
            if(imput.toLowerCase() === 'producto2'){
                suma = producto1 + producto2;
            }
            if(imput.toLowerCase() === 'producto3'){
                suma = producto1 + producto2 + producto3;
            }
            if(imput.toLowerCase() === 'comprar'){
                break;
                console.log(suma);
            }
        }while(true);
        
        alert("El valor total a pagar es " + suma);
        
        pagar = prompt("Seleccione 'pagar' para realizar la compra");
        
        if (pagar === 'pagar'){
            alert("Gracias por su compra");
            suma = 0;
        } 
        else {
            alert(pagar);
        }
        break;
    }

    if (intentos >= MAX_INTENTOS){
        alert("la cantidad de intentos se alcanzo")
        break;
        }

}while(true);

