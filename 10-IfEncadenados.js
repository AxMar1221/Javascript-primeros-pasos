const destino = "Puebla";
const city = new Array("CDMX", "Puebla", "Guadalajara", "Monterrey");

let agePassenger = 19;
let isAccompanied = true;

console.log(`verificando si "${destino}" esta en la ruta`);

if (agePassenger >= 18 || isAccompanied) {
  if (city.indexOf(destino) > -1) {
    console.log(`Se puede vender ticket para "${destino}"`);
  } else {
    console.log(`"${destino}" no esta en la ruta`);
  }
} else {
    if ( agePassenger >= 16 && destino == 'Puebla') {
        console.log(`"${destino}" no esta en la ruta`)
    } else {
        console.log("pasajero no cumple con las condiciones");
    }
}
