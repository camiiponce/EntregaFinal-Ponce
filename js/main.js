class Producto{
    constructor(codigo, nombre, precio, imagen){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
    }
}

//Creo Productos

const producto1 = new Producto (1, 'Mono rosa', 430, '/multimedia/img/mono2.png')
const producto2 = new Producto (2, 'Mono azul', 432, './multimedia/img/mono1.png')
const producto3 = new Producto (3, 'Tapado bicolor', 550, './multimedia/img/tapado2.png')
const producto4 = new Producto (4, 'Remera bicolor', 40, './multimedia/img/remera3.png')
const producto5 = new Producto (5, 'Saco gris', 250, './multimedia/img/traje3.png')
const producto6 = new Producto (6, 'Saco bicolor', 232, './multimedia/img/traje4.png')


const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

for(let i=0; i<productos.length; i++){
    
    let card = document.getElementById('card' + i)
    card.querySelector('.card-img-top').src = productos[i].imagen;  
    card.querySelector('.card-title').textContent = productos[i].nombre;
    card.querySelector('.card-text').textContent = '$' + productos[i].precio;
}

let total = 0;
let opcion = 0;

//Funciones

function sumarAlTotal(saldo, valor){
    return saldo + valor
}

function sumarIva(saldo){
    return saldo * 1.21
}

//Menú

const boton = document.getElementById('botonComprar')
boton.addEventListener('click', funcionComprar)

function funcionComprar(){

    alert('Bienvenido/a a nuestra tienda online')
    alert('Por favor escriba el código de lo que desea comprar')

    do{
        opcion = parseInt(prompt(producto1.codigo + '. ' + producto1.nombre + ' $' + producto1.precio + '\n'
                             + producto2.codigo + '. ' + producto2.nombre + ' $' + producto2.precio + '\n' 
                             + producto3.codigo + '. ' + producto3.nombre + ' $' + producto3.precio + '\n'
                             + producto4.codigo + '. ' + producto4.nombre + ' $' + producto4.precio + '\n'
                             + producto5.codigo + '. ' + producto5.nombre + ' $' + producto5.precio + '\n'
                             + producto6.codigo + '. ' + producto6.nombre + ' $' + producto6.precio + '\n7. Salir'))
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
                total = sumarAlTotal(total, producto4.precio)
                alert('Total: $' + total)
                break;
            case 5:
                total = sumarAlTotal(total, producto5.precio)
                alert('Total: $' + total)
                break;
            case 6:
                total = sumarAlTotal(total, producto6.precio)
                alert('Total: $' + total)
                break;
            case 7:
                if(total !== 0){
                    alert('Subtotal: $' + total)
                    total = sumarIva(total)
                    alert('Total a pagar Iva incluido: $' + total)
                    alert('Gracias por la compra')
                } else {
                    alert('Gracias por su visita')
                }
                break;
            default:
                alert('No seleccionó una opción válida')
                break;
        }
    } while(opcion !== 7)

}