//window.onload = initfunction;
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
    customerOrder.fName = document.getElementById("customer").value;
    customerOrder.lName = document.getElementById("LastName").value;
    customerOrder.address = document.getElementById("Address").value;
    customerOrder.phoneNumber = document.getElementById("Phone").value;
    //display to html
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
    //assign values to items in object
    pizzaOrder.pizzaName = document.querySelector('input[name=pizzaName]:checked').value;
    pizzaOrder.pizzaSize = document.querySelector('input[name=pizzaSize]:checked').value;
    pizzaOrder.pizzaQuantity = document.getElementById("pizzaQuantity").value;
    //get the extras to add to pizzaToppings array
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


    //add pizza description to pizzaOrderArray
    customerOrder.pizzaOrderArray.push(pizzaOrder);
    displayInvoice();
}

//add sandwich to sandwichOrderArray in customerOrder object
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
    //add to sandwichOrderArray
    customerOrder.sandwhichOrderArray.push(sandwichObject);
    displayInvoice();
}

//add drink to to drinkOrderArray in customerOrder object
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

    //add to drinkOrderArray
    customerOrder.drinkOrderArray.push(drinkObject);
    displayInvoice();
}

//function to calculate grand total
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

//method to display invoice to html
function displayInvoice() {
    //put data in tabel and display in html
    var pizzaToppingsDesc = "";
    var order = "<tr><td>" + "Your Order" + "<tr><td>";
    var subTotals = "";
    var customerInfo = customerOrder.fName + " " + customerOrder.lName +
        "<br>" + customerOrder.address +
        "<br>" + customerOrder.phoneNumber +
        "<br>";

    //only show headings is there is an item in the arrays
    if (customerOrder.pizzaOrderArray.length > 0) {
        order += "<tr><td>" + "Pizza:" + "</td></tr>";
    }

    for (var x = 0; x < customerOrder.pizzaOrderArray.length; x++) {

            //get pizza toppings
        for(var y= 0; y < customerOrder.pizzaOrderArray[x].pizzaToppings.length; y++)
        {
            pizzaToppingsDesc += customerOrder.pizzaOrderArray[x].pizzaToppings[y] + ", ";
        }

        //put order in variable order
        order += "<tr><td>";
        order += "<input type=radio name=modify value=" + x + " onchange=modifyItem(this.value,'pizza')>";
        order += customerOrder.pizzaOrderArray[x].pizzaQuantity + " " + customerOrder.pizzaOrderArray[x].pizzaSize +
            " " +
            customerOrder.pizzaOrderArray[x].pizzaName +
            ", " +
            pizzaToppingsDesc +
            ": " + "</td>";
        order += "<td>" + "$" + customerOrder.pizzaOrderArray[x].pizzaCost.toFixed(2);
        order += "<td>" + "<Button class = 'deleteButton' onclick=deleteItem(this.value,'pizza'); return false; value=" + x + ">"
        order += "X" + "</Button><br></td>";
        order += "</td></tr>";

    }


    //repeat for sandwich
    if (customerOrder.sandwhichOrderArray.length > 0) {
        order += "<tr><td>" + "Sandwiches:" + "</td></tr>";
    }

    for (var x = 0; x < customerOrder.sandwhichOrderArray.length; x++) {



        order += "<tr><td>";
        order += "<input type=radio name=modify value=" + x + " onchange=modifyItem(this.value,'sandwich')>";
        order += customerOrder.sandwhichOrderArray[x].sandwichQuantity +
            " " +
            customerOrder.sandwhichOrderArray[x].sandwichName +
            ": " + "</td>";

        order += "<td>" + "$" + customerOrder.sandwhichOrderArray[x].sandwichCost.toFixed(2);
        order += "<td>" + "<Button class = 'deleteButton' onclick=deleteItem(this.value,'sandwich'); return false; value=" + x + ">"
        order += "X" + "</Button><br></td>";
        order += "</td></tr>";
    }


    //repeat for drink
    if (customerOrder.drinkOrderArray.length > 0) {
        order += "<tr><td>" + "Drinks:" + "</td></tr>";
    }

    for (var x = 0; x < customerOrder.drinkOrderArray.length; x++) {


        order += "<tr><td>";
        order += "<input type=radio name=modify value=" + x + " onchange=modifyItem(this.value,'drink')>";
        order += customerOrder.drinkOrderArray[x].drinkQuantity + " " + customerOrder.drinkOrderArray[x].drinkSize + 
            " " +
            customerOrder.drinkOrderArray[x].drinkName +
            ": " + "</td>";

        order += "<td>" + "$" + customerOrder.drinkOrderArray[x].drinkCost.toFixed(2);
        order += "<td>" + "<Button class = 'deleteButton' onclick=deleteItem(this.value,'drink'); return false; value=" + x + ">"
        order += "X" + "</Button><br></td>";
        order += "</td></tr>";

    }

    //calculate grandtotal
    var grandTotal = calculateGrandTotal();
    //dispaly it all to html
    document.getElementById("customerInfo").innerHTML = customerInfo;
    document.getElementById("showOrder").innerHTML = order;
    document.getElementById("grandTotalWord").innerHTML = "Grand Total";
    document.getElementById("grandTotal").innerHTML = "$" + grandTotal.toFixed(2);
}

//function to allow user to delete an item off order
function deleteItem(i, type) {
    //must determine which array to access
    switch (type) {
        case 'pizza':
            //take item out of array - do same for sandwich and drink
            customerOrder.pizzaOrderArray.splice(i, 1);
            break;
        case 'sandwich':
            customerOrder.sandwhichOrderArray.splice(i, 1);
            break;
        case 'drink':
            customerOrder.drinkOrderArray.splice(i, 1);
            break;
    }

    displayInvoice();
}

//function that will allow user to modify their order
function modifyItem(itemPosition,type) {
    index = itemPosition;
    var itemSelected = "";

    //change buttons
    document.getElementById("submit").disabled = true;
    document.getElementById("edit").disabled = false;

    //load customer information
    document.getElementById("FirstName").value = customerOrder.fName;
    document.getElementById("LastName").value = customerOrder.lName;
    document.getElementById("Address").value = customerOrder.address;
    document.getElementById("Phone").value = customerOrder.phoneNumber;
    switch (type) {
        case 'pizza':
            //console.log("Testing, testing to see if it get's here!");
            
            var pizzaName = "";
            var pizzaSize = "";
            var pizzaCost = 0;
            //localize pizzaOrder
            var pizzaOrder = {
                pizzaName,
                pizzaSize,
                pizzaQuantity,
                pizzaToppings:[],
                pizzaCost
            };

            //create pizza object
            pizzaOrder = customerOrder.pizzaOrderArray[itemPosition];
            //get the name of the pizza
            itemSelected = pizzaOrder.pizzaName;
            //depending on what is in the object check off radio buttons in html
            switch(itemSelected)
            {
                case "Super Cheesy":
                document.getElementById("cheese").checked = true;
                break;
                case "Extra Meaty":
                document.getElementById("meat").checked = true;
                break;
                case "Really Veggie":
                document.getElementById("veggie").checked = true;
                break;

            }
            //same for size
            itemSelected = pizzaOrder.pizzaSize;
            switch(itemSelected)
            {
                case "Small":
                document.getElementById("Small").checked = true;
                break;
                case "Medium":
                document.getElementById("Medium").checked = true;
                break;
                case "Large":
                document.getElementById("Large").checked = true;
                break;
                case "Extra Large":
                document.getElementById("ExtraLarge").checked = true;
                break;
               

            }

            //clear out checkboxes
            document.getElementById("extraCheese").checked = false;
            document.getElementById("extraMushrooms").checked = false;
            document.getElementById("extraOlives").checked = false;
            //if any of the toppings are present check off the checkboxes
            for(var x = 0; x < pizzaOrder.pizzaToppings.length; x++)
            {
          
                if(pizzaOrder.pizzaToppings[x] == "Cheese")
                {
                    document.getElementById("extraCheese").checked = true;
                }
                if(pizzaOrder.pizzaToppings[x] == "Mushrooms")
                {
                    document.getElementById("extraMushrooms").checked = true;
                }
                if(pizzaOrder.pizzaToppings[x] == "Olives")
                {
                    document.getElementById("extraOlives").checked = true;
                }
            }
            //put in quantity in textfield
            document.getElementById("pizzaQuantity").value = pizzaOrder.pizzaQuantity;
            break;

        //to the same for sandwich
        case 'sandwich':
            //localize sandwichObject
            var sandwichName = "";
            var sandwichCost = 0;
            var sandwichObject = {
                sandwichName,
                sandwichQuantity,
                sandwichCost
            };

            //create sandwich object 
           
            sandwichObject = customerOrder.sandwhichOrderArray[itemPosition];

            itemSelected = sandwichObject.sandwichName;

            

            switch(itemSelected)
            {
                case "All Garden Vegetarian":
                document.getElementById("All Garden Vegetarian").checked = true;
                break;
                case "Big Beef on a Bun":
                document.getElementById("Big Beef on a Bun").checked = true;
                break;
                case "Mixed Grill":
                document.getElementById("Mixed Grill").checked = true;
                break;

            }

            document.getElementById("sandwichQuantity").value = sandwichObject.sandwichQuantity;

            break;

        //do the same for drink
        case 'drink':
            var drinkName = "";
            var drinkSize = "";
            var drinkCost = 0;

            //localize drinkObject
            var drinkObject = {
                drinkName,
                drinkSize,
                drinkQuantity,
                drinkCost
            };

            //create drink object
            drinkObject = customerOrder.drinkOrderArray[itemPosition];

            itemSelected = drinkObject.drinkName;

            console.log(drinkObject);
            
            switch(itemSelected)
            {
                case "Cola":
                document.getElementById("cola").checked = true;
                break;
                case "Sprite":
                document.getElementById("sprite").checked = true;
                break;
                case "Root Beer":
                document.getElementById("rootBeer").checked = true;
                break;

            }

            itemSelected = drinkObject.drinkSize;
           
            switch(itemSelected)
            {
                case "Small":
                document.getElementById("smallDrink").checked = true;
                break;
                case "Medium":
                document.getElementById("mediumDrink").checked = true;
                break;
                case "Large":
                document.getElementById("largeDrink").checked = true;
                break;

            }

            document.getElementById("drinkQuantity").value = drinkObject.drinkQuantity;
            break;
    }
}

//function to update the customer order to show changes made
function changeCustomerOrder()
{

    //assign the customer attributes to customerOrder
    customerOrder.fName = document.getElementById("FirstName").value;
    customerOrder.lName = document.getElementById("LastName").value;
    customerOrder.address = document.getElementById("Address").value;
    customerOrder.phoneNumber = document.getElementById("Phone").value;

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

    //re-assign all the values into the object
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

    //multiply this by quantity ordered
    totalPizzaCost *= pizzaOrder.pizzaQuantity;

    //add the cost to the pizzaObject
    pizzaOrder.pizzaCost = totalPizzaCost;

    customerOrder.pizzaOrderArray[index] = pizzaOrder;

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

    //get sandwich name to put into sandwhichObject
    sandwichObject.sandwichName = document.querySelector('input[name=sandwichName]:checked').value;
    //get sandwich quantity to put into sandwhichObject
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

    customerOrder.sandwhichOrderArray[index] = sandwichObject;

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

    customerOrder.drinkOrderArray[index] = drinkObject;


  //reset submit button
  document.getElementById("submit").disabled = false;
  document.getElementById("edit").disabled = true;
  displayInvoice();
}

