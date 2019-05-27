window.onload = initfunction;
var index = 0;

var fName = "";
var lName = "";
var address = "";
var phoneNumber = "";




//object for customer order
var customerOrder = {
    fName,
    lName,
    address,
    phoneNumber,
    pizzaOrderArray: [],
    sandwhichOrderArray: [],
    drinkOrderArray: [],
    //grandTotal
};


//display current date on webpage
function initfunction() {
    var todaysDate = new Date();
    document.getElementById('theDate').innerHTML = todaysDate;
}

//create a customerOrder
function createCustomerOrder() {

    //assign the customer attributes to customerOrder
    customerOrder.fName = document.getElementById("FirstName").value;
    customerOrder.lName = document.getElementById("LastName").value;
    customerOrder.address = document.getElementById("Address").value;
    customerOrder.phoneNumber = document.getElementById("Phone").value;

    //add sandwhiches to customerOrder
    //customerOrder.sandwhichOrder.push(addSandwhich());

    //add drinks to customerOrder
    //customerOrder.drinkOrder.push(addDrink());

    displayInvoice();


}

function addPizza() {
    //add the pizza to the customer order

    var pizzaName = "";
    var pizzaSize = "";
    var pizzaQuantity = 0;
    var pizzaToppings = "";
    var toppingCounter = 0;
    var pizzaCost = 0;

    var pizzaOrder = {
        pizzaName,
        pizzaSize,
        pizzaQuantity,
        pizzaToppings: [],
        pizzaCost
    };
    //assign values to object
    pizzaOrder.pizzaName = document.querySelector('input[name=pizzaName]:checked').value;
    pizzaOrder.pizzaSize = document.querySelector('input[name=pizzaSize]:checked').value;
    pizzaOrder.pizzaQuantity = document.getElementById("pizzaQuantity").value;

    if (document.querySelector('input[name=extraCheese]:checked')) {
        pizzaOrder.pizzaToppings.push("Cheese");
        toppingCounter++;
    }
    if (document.querySelector('input[name=extraMushrooms]:checked')) {
        pizzaOrder.pizzaToppings.push("Mushrooms");
        toppingCounter++;
    }
    if (document.querySelector('input[name=extraOlives]:checked')) {
        pizzaOrder.pizzaToppings.push("Olives");
        toppingCounter++;
    }


    //calculate the pizza cost and add it to pizzObject
    var totalPizzaCost = 0;
    switch (pizzaOrder.pizzaSize) {
        case "Small":
            totalPizzaCost = 8.50;
            totalPizzaCost = parseFloat(totalPizzaCost);
            break;
        case "Medium":
            totalPizzaCost = 11.50;
            totalPizzaCost = parseFloat(totalPizzaCost);
            break;
        case "Large":
            totalPizzaCost = 14.00;
            totalPizzaCost = parseFloat(totalPizzaCost);
            break;
        case "Extra Large":
            totalPizzaCost = 16.50;
            totalPizzaCost = parseFloat(totalPizzaCost);
            break;
    }

    //add the pizza topping costs to totalPizzaCost
    totalPizzaCost += (toppingCounter * 1.75);
    console.log("After Toppings: " + totalPizzaCost);
    //multiply this by quantity ordered
    totalPizzaCost *= pizzaOrder.pizzaQuantity;
    console.log("After Quantity: " + totalPizzaCost);
    //add the cost to the pizzaObject
    pizzaOrder.pizzaCost = totalPizzaCost;
    //add to array
    customerOrder.pizzaOrderArray.push(pizzaOrder);
    displayInvoice();
}

//function to add sandwich to sandwich array
function addSandwhich() {
    //variable for cost of sandwich
    var totalSandwichCost = 0;
    var sandwichName = "";
    var sandwichCost = 0;
    sandwichCost = parseFloat(sandwichCost);
    var sandwichDescription = "";
    //create an object for a sandwich
    var sandwichObject = {
        sandwichName,
        sandwichQuantity,
        sandwichCost
    };

    //get sandwhich name to put into sandwhichObject
    sandwichObject.sandwichName = document.querySelector('input[name=sandwichName]:checked').value;
    //get sandwhich quantity to put into sandwhichObject
    sandwichObject.sandwichQuantity = document.getElementById("sandwichQuantity").value;

    //calculate cost of sandwich
    switch (sandwichObject.sandwichName) {
        case "All Garden Vegetarian":
            totalSandwichCost = 7.50;
            break;
        case "Big Beef on a Bun":
            totalSandwichCost = 8.50;
            break;
        case "Mixed Grill":
            totalSandwichCost = 9.50;
            break;
    }

    //Multiply cost of sandwich by quantity ordered
    totalSandwichCost *= sandwichObject.sandwichQuantity;
    totalSandwichCost = parseFloat(totalSandwichCost);
    //add sandwich cost to sandwichObject
    sandwichObject.sandwichCost = totalSandwichCost;
    
    //add to sandwich array
    customerOrder.sandwhichOrderArray.push(sandwichObject);
    displayInvoice();
}

//function to add drink to drink array in object
function addDrink() {

    //variable for cost of drink
    var totalDrinkCost = 0;
    var drinkName = "";
    var drinkSize = "";
    var drinkCost = 0;
    var drinkDescription = "";
    drinkCost = parseFloat(drinkCost);
    //create an object for a drink
    var drinkObject = {
        drinkName,
        drinkSize,
        drinkQuantity,
        drinkCost
    }

    //get drink name to add to drinkObject
    drinkObject.drinkName = document.querySelector('input[name=drink]:checked').value;
    //get drink size to add to drinkObject
    drinkObject.drinkSize = document.querySelector('input[name=drinkSize]:checked').value;
    //get drink quantity to add to drinkObject
    drinkObject.drinkQuantity = document.getElementById("drinkQuantity").value;

    //calculate cost of drink
    switch (drinkObject.drinkSize) {
        case "Small":
            totalDrinkCost = 1.25;
            break;
        case "Medium":
            totalDrinkCost = 1.75;
            break;
        case "Large":
            totalDrinkCost = 2.00;
    }

    //Multiply totalDrinkCost by quantity ordered
    totalDrinkCost *= drinkObject.drinkQuantity;
    totalDrinkCost = parseFloat(totalDrinkCost);
    //add drink cost to drinkObject
    drinkObject.drinkCost = totalDrinkCost;

    customerOrder.drinkOrderArray.push(drinkObject);
    displayInvoice();
}

//function to caculate grand total
function calculateGrandTotal() {
    var grandTotal = 0;

    //get all the grandtotals from the pizza orders
    for (var i = 0; i < customerOrder.pizzaOrderArray.length; i++) {
        grandTotal += customerOrder.pizzaOrderArray[i].pizzaCost;
    }

    //get all the grand totals from the sandwich orders
    for (var i = 0; i < customerOrder.sandwhichOrderArray.length; i++) {
        grandTotal += customerOrder.sandwhichOrderArray[i].sandwichCost;
    }

    //get all the grand total from the drnk orders
    for (var i = 0; i < customerOrder.drinkOrderArray.length; i++) {
        grandTotal += customerOrder.drinkOrderArray[i].drinkCost;
    }

    //return the total cost to display in invoice
    return grandTotal;
}

//function to display invoice/order on html screen
function displayInvoice() {

    //put outputs inside a table in the html
    var pizzaToppingsDesc = "";
    var order = "<tr><td>" + "Your Order" + "<tr><td>";
    var subTotals = "";
    var customerInfo = customerOrder.fName + " " + customerOrder.lName +
        "<br>" + customerOrder.address +
        "<br>" + customerOrder.phoneNumber +
        "<br>";

    //only show Pizza heading if a pizza has been ordered
    if (customerOrder.pizzaOrderArray.length > 0) {
        order += "<tr><td>" + "Pizza:" + "</td></tr>";
    }
    //Go through pizza array to display items
    for (var x = 0; x < customerOrder.pizzaOrderArray.length; x++) {

    //get pizza toppings 
        for(var y= 0; y < customerOrder.pizzaOrderArray[x].pizzaToppings.length; y++)
        {
            pizzaToppingsDesc += customerOrder.pizzaOrderArray[x].pizzaToppings[y] + ", ";
       
        }
        //put all items into a table rows and data fields - put in variable order
        order += "<tr><td>";
        order += customerOrder.pizzaOrderArray[x].pizzaQuantity + " " + customerOrder.pizzaOrderArray[x].pizzaSize +
            " " +
            customerOrder.pizzaOrderArray[x].pizzaName +
            ", " +
            pizzaToppingsDesc +
            ": " + "</td>";
        order += "<td>" + "$" + customerOrder.pizzaOrderArray[x].pizzaCost.toFixed(2);
        order += "</td></tr>";

    }



    if (customerOrder.sandwhichOrderArray.length > 0) {
        order += "<tr><td>" + "Sandwiches:" + "</td></tr>";
    }

    for (var x = 0; x < customerOrder.sandwhichOrderArray.length; x++) {



        order += "<tr><td>";
        order += customerOrder.sandwhichOrderArray[x].sandwichQuantity +
            " " +
            customerOrder.sandwhichOrderArray[x].sandwichName +
            ": " + "</td>";

        order += "<td>" + "$" + customerOrder.sandwhichOrderArray[x].sandwichCost.toFixed(2);
        order += "</td></tr>";
    }



    if (customerOrder.drinkOrderArray.length > 0) {
        order += "<tr><td>" + "Drinks:" + "</td></tr>";
    }

    for (var x = 0; x < customerOrder.drinkOrderArray.length; x++) {


        order += "<tr><td>";
        order += customerOrder.drinkOrderArray[x].drinkQuantity + " " + customerOrder.drinkOrderArray[x].drinkSize + 
            " " +
            customerOrder.drinkOrderArray[x].drinkName +
            ": " + "</td>";

        order += "<td>" + "$" + customerOrder.drinkOrderArray[x].drinkCost.toFixed(2);
        order += "</td></tr>";

    }

    //calculate grand total of order
    var grandTotal = calculateGrandTotal();
    //push it out to html
    document.getElementById("customerInfo").innerHTML = customerInfo;
    document.getElementById("showOrder").innerHTML = order;
    document.getElementById("grandTotalWord").innerHTML = "Grand Total";
    document.getElementById("grandTotal").innerHTML = "$" + grandTotal.toFixed(2);
}


