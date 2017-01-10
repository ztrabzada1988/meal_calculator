// Step 1:  Define functions.


// OBJECT FOR DINDER //

// diner of object with name and list of dishes
function Diner(name) {
    this.name = name;
    this.dishList = [];
}

// object dish name with price
function Dish(dishName, price) {
    this.dishName = dishName;
    this.price = price;
}

// method to add dishes
Diner.prototype.addDish = function (dish) {
    this.dishList.push(dish);
}

// method to add total dishlist prices
Diner.prototype.total = function () {
    var total = 0;
    for (var i = 0; i <= this.dishList.length; i++) {
        total += this.dishList[i].price;
    }
    return total;
}

// method to calculate tax for the dishlist price with a tax rate of 8.75%
var taxRate = 0.0875;

Diner.prototype.calculateTax = function (taxRate) {
    var totalTax = 0;

    for (var i = 0; i <= this.dishList.length; i++) {
        totalTax += this.dishList[i].price * taxRate;
    }
    return totalTax;
}

// method to calculate tip at 20%
var tipRate = 0.20;

Diner.prototype.calculateTip = function (tipRate) {
    var totalTip = 0;
    for (var i = 0; i <= this.dishList.length; i++) {
        totalTip += this.dishList[i].price * tipRate;
    }
    return totalTip;
}



// OBJECT FOR BILL //

// Bill object with list of diners
function Bill() {
    this.dinersList = [];
}

// method to add diners
Bill.prototype.addDiner = function (diner) {
    this.dinersList.push(diner);
}

// method to total and print the total of all diners, including tax
Bill.prototype.totalBill = function () {
    var totalDinerBill = 0;
    for (let i = 0; i <= this.dinersList.length; i++) {
        totalDinerBill += (this.dinersList[i].total() + this.dinersList[i].calculateTax(taxRate) + this.dinersList[i].calculateTip(tipRate));
    }
    // return total bill with 2 decimal places
    return totalDinerBill.toFixed(2);
}

// method to total and print diners tips
Bill.prototype.printTips = function (totalTips) {
    var totalTips = 0;
    for (let i = 0; i <= this.dinersList.length; i++) {
        totalTips += this.dinersList[i].calculateTip(tipRate);
    }
    return totalTips.toFixed(2);
}


// Step 2: Use functions




// Print a breakdown for each person
function breakdownPerPerson() {

}
