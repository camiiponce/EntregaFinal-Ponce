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
    card.querySelector('.card-img-top').src = productos[i].imagen 
    card.querySelector('.card-title').textContent = productos[i].nombre
    card.querySelector('.card-text').textContent = '$' + productos[i].precio
    const botonAgregarCarrito = card.querySelector('.btn-agregar-carrito')
    botonAgregarCarrito.addEventListener('click', function() {
        agregarAlCarrito(productos[i]);
    })
}

let total = 0

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(sessionStorage.getItem('carrito')) || []

    //Ver si ya está en el carrito
    const productoEnCarrito = carrito.find(item => item.codigo === producto.codigo);

    if (!productoEnCarrito) {
        // Si no está, lo agrego
        carrito.push(producto)
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Se agregó ' + producto.nombre + ' al carrito');
        total = sumarAlTotal(total, producto.precio)
    } else {
        //Si ya está, se da aviso y no agrego
        alert('El producto ya está en el carrito');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const botonVerCarrito = document.getElementById('botonComprar')

    botonVerCarrito.addEventListener('click', function () {
        //Obtengo lo que esta en el session
        const carrito = JSON.parse(sessionStorage.getItem('carrito')) || []

        if (carrito.length === 0) {
            alert('No hay nada en el carrito');
        } else {
            //Muestreo de lo que hay en el carrito
            let mensaje = 'Productos en el carrito:\n'
            for (const producto of carrito) {
                mensaje += '- ' + producto.nombre + '\n'
            }
            mensaje += '\n'
            mensaje += 'Total: ' + total + '\n'
            mensaje += 'Total IVA incluido: ' + sumarIva(total) + '\n'
            alert(mensaje)
        }
    });
});

//Funciones

function sumarAlTotal(saldo, valor){
    return saldo + valor
}

function sumarIva(saldo){
    return saldo * 1.21
}

//Menú

/*const boton = document.getElementById('botonComprar')
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
*/

//Login//

const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});