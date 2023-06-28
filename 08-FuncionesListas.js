const city = new Array("CDMX", "Puebla", "Guadalajara", "Monterrey");

const country = ["México", "Canada", "USA", "Guatemala", "Cuba", "Peru"];

const countryAndCity = country.concat(city);

const countCity = country.length;

console.log(`En la lista de países tenemos ${countCity} elementos`);
console.log(`En la lista de ciudades tenemos ${city.length} elementos`);

console.log(city);
city.shift();
console.log(city);
console.log(`En la lista de ciudades tenemos ${city.length} elementos`);

city.pop();
console.log(city);
console.log(`En la lista de ciudades tenemos ${city.length} elementos`);

const filterCountry = country.filter((e) => e == "Cuba");
console.log(filterCountry);

console.log(country.join("-"));

console.log(country.sort());

console.log(`México esta en la posición ${country.indexOf("México")}`);

console.log(countryAndCity.sort());
