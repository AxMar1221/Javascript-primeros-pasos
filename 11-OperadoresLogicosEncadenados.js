const destino = "Puebla";
const city = new Array("CDMX", "Puebla", "Guadalajara", "Monterrey");

let agePassenger = 19;
let isAccompanied = true;
let hasPassport = true;
let isMarried = false;

console.log(`verificando si "${destino}" esta en la ruta`);

if (city.indexOf(destino) > -1 && agePassenger >= 18 && hasPassport && !isMarried) {
  console.log(`Se puede vender ticket para "${destino}"`);
} else {
  console.log(`"${destino}" no esta en la ruta pasajero no cumple con las reglas`);
}
