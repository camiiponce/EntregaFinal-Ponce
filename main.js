//Validación de Clave de Usuario//

let pass = 4567;

let dato = parseInt(prompt("Por favor ingrese correctamente los digitos de su clave."));

let intentos = 3

while((dato != pass) && (intentos > 0)) {
  intentos--;
  alert(`Clave incorrecta. Te quedan ${intentos} intentos.`);
  if(intentos == 0) {
    break;
  }
  dato = parseInt(prompt("Por favor ingrese correctamente los digitos de su clave"))
}
