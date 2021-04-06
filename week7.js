/*var time = new Date().getHours();

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting) */
class KioskCalc {
    constructor(fruit, quantity, price) {
        this.fruit = fruit;
        this.quantity = quantity;
        this.price = price;

    }
    getTotalCost() {
        return `I will buy 2 oranges for KES ${this.quantity * this.price}`
    }
}
var kioskCalc1 = new KioskCalc("oranges", 2, 30); //I can add my items here because I passed a parameter.
console.log(kioskCalc1.getTotalCost());