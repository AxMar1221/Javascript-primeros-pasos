const ticketCost = 1000;
if (ticketCost === 1000) {
  console.log("El pasaje vale 1000");
} else {
  console.log("El ticket tiene un descuento");
}

const destino = "CDMX";
const city = new Array("CDMX", "Puebla", "Guadalajara", "Monterrey");

let agePassenger = 19;
let isAccompanied = true;

console.log(`verificando si "${destino}" esta en la ruta`);

if (city.indexOf(destino) > -1 && (agePassenger >= 18 || isAccompanied)) {
  console.log(`Se puede vender ticket para "${destino}"`);
} else {
  console.log(
    `"${destino}" no esta en la ruta y pasajero no cumple con las condiciones`
  );
}

agePassenger = 12;
isAccompanied = false;

console.log(`verificando si "${destino}" esta en la ruta (CON NOT)`);

if (!(city.indexOf(destino) > -1 && (agePassenger >= 18 || isAccompanied))) {
  console.log(
    `"${destino}" no esta en la ruta y pasajero no cumple con las condiciones`
  );
} else {
  console.log(`Se puede vender ticket para "${destino}"`);
}
