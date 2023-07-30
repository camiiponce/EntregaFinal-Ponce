/*class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
    }
}

//Productos//

const producto1 = new Producto (1, 'Tapado', 67500)
const producto2 = new Producto (2, 'Pantalon', 15400)
const producto3 = new Producto (3, 'Saco', 29100)

let total = 0;
let opcion = 0;

//Funciones//

function sumarAlTotal(saldo, valor){
    return saldo + valor
}

function sumarIva(saldo){
    return saldo * 1.21
}

//Menú//

alert('Bienvenido/a a nuestra tienda online')
alert('Por favor ingrese a continuación el número de prenda que desea comprar')

do{
    opcion = parseInt(prompt(producto1.codigo + '. ' + producto1.nombre + ' $' + producto1.precio + '\n' + producto2.codigo + '. ' + producto2.nombre + ' $' + producto2.precio + '\n' + producto3.codigo + '. ' + producto3.nombre + ' $' + producto3.precio + '\n4. Salir'))
    switch(opcion){
        case 1:
            total = sumarAlTotal(total, producto1.precio)
            alert('Total: $' + total)
            break;
        case 2:
            total = sumarAlTotal(total, producto2.precio)
            alert('Total: $' + total)
            break;
        case 3:
            total = sumarAlTotal(total, producto3.precio)
            alert('Total: $' + total)
            break;
        case 4:
            if(total !== 0){
                alert('Subtotal: $' + total)
                total = sumarIva(total)
                alert('Total a pagar IVA incluido: $' + total)
                alert('Gracias por la compra')
            } else {
                alert('Vuelva pronto')
            }
            break;
        default:
            alert('No seleccionó una opción válida')
            break;
    }
} while(opcion !== 4)
*/
