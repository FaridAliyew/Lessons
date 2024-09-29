// ------ Task 5 -------
function Car(brand, model, year, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
}

Car.prototype.country = "Azərbaycan";

const Toyota = new Car("Toyota","Camry", 2021, 25000);
const Porsche = new Car("Porsche","911 Carrera GTS", 2019, 30000);
const Lamborghini = new Car("Porsche","Revuelto", 2020, 120000);
console.log(Porsche);