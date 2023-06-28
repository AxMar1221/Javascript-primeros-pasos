const data = [
  {
    city: "CDMX",
    price: 300,
  },
  {
    city: "Puebla",
    price: 250,
  },
  {
    city: "Guadalajara",
    price: 200,
  },
  {
    city: "Monterrey",
    price: 150,
  },
];

const budget = 199;

let i = 0;
let citySleeted = "";

do {
  if (data[i].price <= budget) {
    citySleeted = data[i].city;
    break;
  }
  i++;
} while (i < data.length && citySleeted == '');
if (i > data.length) {
  console.log("No tenemos destinos disponibles");
} else {
  console.log("Puedes comprar boleto para: " + citySleeted);
}
