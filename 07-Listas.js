const city1 = "Puebla";
const city2 = "CDMX";
const city3 = "Guadalajara";

const city = new Array("Puebla", "CDMX", "Guadalajara");
console.log(city);

const country = ["México", "Panama", "Colombia", "Argentina", "Brazil"];
console.log(country);

city.push("Tlaxcala");
country.push("Chile");
console.log(city);
console.log(country);

country.unshift("Ecuador");
city.unshift("Monterrey");
console.log(city);
console.log(country);

console.log(city[0]);
console.log(country[0]);

country.splice(1, 2, "Paraguay", "Venezuela");
console.log(country);
