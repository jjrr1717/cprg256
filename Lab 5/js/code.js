window.onload = initfunction;


//variables
var fName;
var lName;
var address;
var phoneNumber;

var totalAmount = parseFloat(0);
var radioButtonPizzaValue = parseFloat(0);
var radioButtonSandwichValue = parseFloat(0);
var radioButtonDrinkValue = parseFloat(0);

var extraToppingsAmount = parseFloat(0);
var toppingsAmount = parseFloat(0);
var toppingsCounter = parseFloat(0);

var pizzaSizeSelection = "";
var pizzaSelection = "";
var extraToppings = "";
var sandwichSelection = "";
var drinkSelection = "";
var drinkSizeSelection = "";
var pizzaSize = "";
var drinkSize = "";

var sandwhichQuantity = parseFloat(0);
var drinkQuantity= parseFloat(0);


//display current date on webpage
function initfunction()
{
    var todaysDate = new Date();
    document.getElementById('theDate').innerHTML = todaysDate;
}


//create the invoice at the bottom of the site
function createInvoice()
{
    //assign shipping info to variables
    fName = document.getElementById("FirstName").value;
    lName = document.getElementById("LastName").value;
    address = document.getElementById("Address").value;
    phoneNumber = document.getElementById("Phone").value;

    //display shipping info on website
    document.getElementById("title").innerHTML = "Invoice Summary";
    document.getElementById("customerName").innerHTML = fName + " " + lName;
    document.getElementById("customerAddress").innerHTML = address;
    document.getElementById("customerPhone").innerHTML = phoneNumber;

    //display table headings
    document.getElementById("item").innerHTML = 'Item';
    document.getElementById("price").innerHTML = 'Price';
    document.getElementById("quantity").innerHTML = 'Quantity';
    document.getElementById("subtotal").innerHTML = 'Subtotal';
    document.getElementById("total").innerHTML = 'Total';

    //assign item variables
    pizzaSelection = document.querySelector('input[name=pizza]:checked').value;
    sandwichSelection = document.querySelector('input[name=sandwich]:checked').id;
    drinkSelection = document.querySelector('input[name=drink]:checked').value;

    //calculate extra toppings costs and assign variables
    if(document.querySelector('input[name= extraCheese]:checked'))
    {
        extraToppingsAmount += parseFloat(document.querySelector('input[name=extraCheese]:checked').value);
        extraToppings = (extraToppings + " Cheese ");
        toppingsCounter += 1;
    }

    if(document.querySelector('input[name=extraMushrooms]:checked'))
    {
        extraToppingsAmount += parseFloat(document.querySelector('input[name=extraMushrooms]:checked').value);
        extraToppings = (extraToppings+" Mushrooms ");
        toppingsCounter += 1;
    }

    if(document.querySelector('input[name= extraOlives]:checked'))
    {
        extraToppingsAmount += parseFloat(document.querySelector('input[name=extraOlives]:checked').value);
        extraToppings = (extraToppings+" Olives ");
        toppingsCounter += 1;
    }

    //assign all the pizza variables
    radioButtonPizzaValue = document.querySelector('input[name=pizzaSize]:checked').value;
    radioButtonPizzaValue = parseFloat(radioButtonPizzaValue);
    pizzaSize = document.querySelector('input[name=pizzaSize]:checked').id;

    //assign all the sandwich variables
    radioButtonSandwichValue = document.querySelector('input[name=sandwich]:checked').value;
    radioButtonSandwichValue = parseFloat(radioButtonSandwichValue);
    sandwhichQuantity = document.getElementById("sandwichQuantity").value;
    sandwichQuantity = parseFloat(sandwichQuantity);

    //assign all the drink variables
    radioButtonDrinkValue = document.querySelector('input[name=drinkSize]:checked').value;
    radioButtonDrinkValue = parseFloat(radioButtonDrinkValue);
    drinkQuantity = document.getElementById("drinkQuantity").value;
    drinkQuantity = parseFloat(drinkQuantity); 
    drinkSize = document.querySelector('input[name=drinkSize]:checked').id;

    //display fist row in table (itemOne - pizza)
    document.getElementById('itemOne').innerHTML = drinkSize + " " + pizzaSelection + " Pizza";
    document.getElementById('priceOne').innerHTML = radioButtonPizzaValue.toFixed(2);
    document.getElementById('quantityOne').innerHTML = '1';
    document.getElementById('subtotalOne').innerHTML = radioButtonPizzaValue.toFixed(2);

    //display second row in table (itemTwo - extraToppings)
    document.getElementById('itemTwo').innerHTML = "Extra:" + extraToppings;
    document.getElementById('priceTwo').innerHTML = '1.75';
    document.getElementById('quantityTwo').innerHTML = toppingsCounter;
    document.getElementById('subtotalTwo').innerHTML = extraToppingsAmount.toFixed(2);


    //display third row in table (itemThree - sandwich)
    document.getElementById('itemThree').innerHTML = sandwichSelection + " Sandwiches";
    document.getElementById('priceThree').innerHTML = radioButtonSandwichValue.toFixed(2);
    document.getElementById('quantityThree').innerHTML = sandwhichQuantity;
    document.getElementById('subtotalThree').innerHTML = (radioButtonSandwichValue * sandwhichQuantity).toFixed(2);

    //display fourth row in table (itemFour - drink)
    document.getElementById('itemFour').innerHTML = drinkSize + " " +  drinkSelection;
    document.getElementById('priceFour').innerHTML = radioButtonDrinkValue.toFixed(2);
    document.getElementById('quantityFour').innerHTML = drinkQuantity;
    document.getElementById('subtotalFour').innerHTML = (radioButtonDrinkValue * drinkQuantity).toFixed(2);

    //calculate the total value of the order
    totalAmount = (radioButtonPizzaValue + extraToppingsAmount + (radioButtonSandwichValue * sandwhichQuantity) 
                    +(radioButtonDrinkValue * drinkQuantity)).toFixed(2);

    //display total value in table footer
    document.getElementById('totalCalculation').innerHTML = totalAmount;
}
