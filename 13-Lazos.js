const city = new Array("CDMX", "Puebla", "Guadalajara", "Monterrey");
const cost = new Array(300, 250, 200, 150);
const budget = 100;

let i = 0;
while (cost[i] > budget && i < city.length) {
  i++;
}
if (i == city.length) {
  console.log("No tenemos destinos disponibles");
} else {
  console.log("Puedes comprar boleto para: " + city[i]);
}
