const destino = "Guadalajara";
const city = new Array("CDMX", "Puebla", "Guadalajara", "Monterrey");

let costTicket = 0;

console.log(`verificando si "${destino}" esta en la ruta`);

if (city.indexOf(destino) > -1) {
  // if (destino == "CDMX") {
  //     costTicket = 300;
  // } else if (destino == "Puebla") {
  //     costTicket = 250;
  // } else if (destino == "Guadalajara") {
  //     costTicket = 200;
  // } else if (destino == "Monterrey") {
  //     costTicket = 150;
  // }
  switch (destino) {
    case "CDMX":
      costTicket = 300;
      break;
    case "Puebla":
      costTicket = 250;
      break;
    case "Guadalajara":
      costTicket = 200;
      break;
    case "Monterrey":
      costTicket = 150;
      break;
    default:
      costTicket = 0;
      break;
  }
  console.log(`El costo del boleto a "${destino}" es de: "$${costTicket}.00"`);
} else {
  console.log(`"${destino}" no esta en la ruta`);
}
