
//variables
var cakeSelection;
var sheetCakeLength;
var sheetCakeWidth;
var i = 0;
var cakeLayers=1;                                                     

var roundCakeRadius;
var nameOfCake;
var itemName;
var itemPrice;

var basePrice= 0;
var additionalSizePrice = 0;
var extraLayersPrice= 0;
var additionalChoicesPrice = 0;
var grandTotal = 0;
var cakeOrdered={itemName,itemPrice};
var creamCheeseObject={itemName,itemPrice};
var almondsObject={itemName,itemPrice};
var jamObject={itemName,itemPrice};
var orderedItemsArray = [];
var validRange = "true";

/*makeSelectionActive determines which radio button is selected.
If Sheet Cake is selected the user can only fill in sheet cake info.
If Round Cake is selected the user can only fill in round cake info.*/ 
function makeSelectionActive()
{
    //get selection
    cakeSelection = document.querySelector('input[name=cakeType]:checked').id;
    //console.log(cakeSelection);

    if(cakeSelection === "sheetCake")
    {
        //make disabled false on sheet cake, ensure round cake disabled is true
        document.getElementById("sheetCakeSection").disabled=false;
        document.getElementById("roundCakeSection").disabled=true;
        //clear data out in round cake
        document.getElementById("cakeRadius").value="";
        document.getElementById("roundCakeLayer").value=0;
        //reset the Array and grandTotal
        orderedItemsArray = [];
        grandTotal = 0;
      

    }
    else if(cakeSelection === "roundCake")
    {
        //make disabled false on round cake, ensure sheet cake disabled is true
        document.getElementById("sheetCakeSection").disabled=true;
        document.getElementById("roundCakeSection").disabled=false;
        //clear data out in sheet cake
        document.getElementById("cakeLength").value="";
        document.getElementById("cakeWidth").value="";
        document.getElementById("sheetCakeLayer").value=0;
        //reset the Array and grandTotal
        orderedItemsArray = [];
        grandTotal = 0;
      
    }
}

function calculateInvoice()
{
  
    //console.log(cakeSelection);

    //if cakeSelection is sheetCake then obtain all values from sheet cake section
    if(cakeSelection === "sheetCake")
    {
        //base price comes from sheetcake
        basePrice = document.getElementById("sheetCake").value;
        basePrice = parseFloat(basePrice);
        //obtain length and width of sheet cake
        sheetCakeLength = document.getElementById("cakeLength").value;
        sheetCakeLength = parseFloat(sheetCakeLength);


        sheetCakeWidth = document.getElementById("cakeWidth").value;
        sheetCakeWidth = parseFloat(sheetCakeWidth);

        //Display alert if size is out of range
        if((sheetCakeLength <30 || sheetCakeLength > 60) || (sheetCakeWidth <30 || sheetCakeWidth > 60))
        {
            alert("Cake size is out of range. Min size = 30 cm, Max size = 60cm");
        }

        //if sheet cake is greater than min size calculate extra charges
        if((sheetCakeLength*sheetCakeWidth) >900)
        {
            //additional cost is area of sheet cake - min area (900) * $0.02
            additionalSizePrice = ((sheetCakeLength*sheetCakeWidth)-900) *0.02;
            additionalSizePrice = parseFloat(additionalSizePrice);
            //add the additional pricing to the base price
            basePrice +=additionalSizePrice;
        }

        //obtain the number of layers selected for sheet cake
        layers = document.getElementById('sheetCakeLayer');
        cakeLayers = layers.options[layers.selectedIndex].value;

        if(cakeLayers == 2)
        {
            //if layers is two than cost will be increased by 50% on basePrice
            extraLayersPrice = (basePrice) * 0.50;
            extraLayersPrice = parseFloat(extraLayersPrice);
            //add extra cost to the base price
            basePrice +=extraLayersPrice;
            cakeLayers=2;                                                                    
        }
        else if(cakeLayers ==3)
        {
            //if layers is three than cost will be increated by 50% per layer on basePrice
            extraLayersPrice = ((basePrice) *0.50) *2;
            extraLayersPrice = parseFloat(extraLayersPrice);
            //add extra cost to the base price
            basePrice +=extraLayersPrice;
            cakeLayers=3;                                                                    
            
        }

        //console.log(basePrice); 
        
        //create a string representing the name of the cake (including length, width, cake layers)
        nameOfCake = ("Sheet Cake " + sheetCakeLength + "cm by " + sheetCakeWidth + "cm with " + cakeLayers + " layers: ");
        //add the name of the cake to the itemName of the cakeOrdered object
        cakeOrdered.itemName = nameOfCake;
        //add the cost of the cake to the itemPrice of the cakeOrdered object
        cakeOrdered.itemPrice = parseFloat(basePrice).toFixed(2);
        //add the cakeOrdered to the orderedItemsArray Array
        orderedItemsArray.push(cakeOrdered);
    }

    //if cakeSelection is roundCake then obtain all values from round cake section
    if(cakeSelection === "roundCake")
    {
        //base price comes from the round cake
        basePrice = document.getElementById("roundCake").value;
        basePrice = parseFloat(basePrice);
        //obtain the radius of the round cake 
        roundCakeRadius = document.getElementById("cakeRadius").value;
        roundCakeRadius = parseFloat(roundCakeRadius);

        //Display alert if size is out of range
        if(roundCakeRadius <15 || roundCakeRadius > 30)
        {
            alert("Cake radius is out of range. Min size = 15 cm, Max size = 30cm");
         
        }

        //if round cake is greater than min size calculate extra charges
        if((Math.pow(roundCakeRadius, 2) * 3.14) > 706.50)
        {
            //additional cost is area of round cake - min area (706.50) * $0.02
            additionalSizePrice = ((Math.pow(roundCakeRadius, 2) * 3.14) -706.50) *0.02;
            additionalSizePrice = parseFloat(additionalSizePrice);
            //add additional cost to basePrice
            basePrice += additionalSizePrice;
        }

        //obtain the layers selected 
        layers = document.getElementById('roundCakeLayer');
        cakeLayers = layers.options[layers.selectedIndex].value;
        

        if(cakeLayers == 2)
        {
            //if layers is two than cost will be increased by 50% on basePrice
            extraLayersPrice = (basePrice) * 0.50;
            extraLayersPrice = parseFloat(extraLayersPrice);
             //add extra cost to the base price
            basePrice +=extraLayersPrice;
            cakeLayers=2;
        }
        else if(cakeLayers ==3)
        {
            //if layers is three than cost will be increated by 50% per layer on basePrice
            extraLayersPrice = ((basePrice) *0.50) *2;
            extraLayersPrice = parseFloat(extraLayersPrice);
            //add extra cost to the base price
            basePrice +=extraLayersPrice;
            cakeLayers=3;
        }

        //console.log(basePrice);

        //create a string representing the name of the cake (including radius cake layers)
        var nameOfCake = ("Round Cake" + roundCakeRadius + "cm with " + cakeLayers + " layers: ");
        //add the name of the cake to the itemName of the cakeOrdered object
        cakeOrdered.itemName = nameOfCake;
        //add the cost of the cake to the itemPrice of the cakeOrdered object
        cakeOrdered.itemPrice = parseFloat(basePrice).toFixed(2);
        //add the cakeOrdered to the orderedItemsArray Array
        orderedItemsArray.push(cakeOrdered);
    }

    //If user selected cream cheese create a cream cheese object of the name and price
    if(document.querySelector('input[id=creamCheese]:checked'))
    {
        //add name to itemName in creamCheeseObject
        creamCheeseObject.itemName = "Cream Cheese Icing";
        //add cost to itemPrice in creamCheeseObject
        creamCheeseObject.itemPrice = parseFloat(document.querySelector('input[id=creamCheese]:checked').value).toFixed(2);
        //add to the Array
        orderedItemsArray.push(creamCheeseObject);

    }

    //If user selected fruits and almonds create a almondsObject object of the name and price
    if(document.querySelector('input[id=fruitAlmonds]:checked'))
    {
        //add name to itemName in almondsObject
        almondsObject.itemName = "Fruit & Almond Topping";
        //add cost to itemPrice in almondsObject
        almondsObject.itemPrice = parseFloat(document.querySelector('input[id=fruitAlmonds]:checked').value).toFixed(2);
        //add to the Array
        orderedItemsArray.push(almondsObject);

    }

    //If user selected Jam Filling create a jamObject object of the name and price
    if(document.querySelector('input[id=fruitJam]:checked'))
    {
        //add name to itemName in jamObject
        jamObject.itemName = "Fruit Jam Filling";
        //add cost to itemPrice in jamObject
        jamObject.itemPrice = parseFloat(document.querySelector('input[id=fruitJam]:checked').value).toFixed(2);
        //add to the Array
        orderedItemsArray.push(jamObject);

    }
}

//create table that shows the invoice (costs and items of the order)
function showInvoice()
{
    //calculate costs of the order with calculateInvoice()
    calculateInvoice();
    

    //Title
    document.getElementById("title").innerHTML = "Cart";

    //show customer's personal information
    document.getElementById("customerName").innerHTML = (document.getElementById('FirstName').value + " " +  
                                                            document.getElementById("LastName").value);
    document.getElementById("customerAddress").innerHTML = document.getElementById("Address").value;
    document.getElementById("postalCode").innerHTML = document.getElementById("PostalCode").value;
    document.getElementById("customerPhone").innerHTML = document.getElementById("Phone").value;
    document.getElementById("customerAddress").innerHTML = document.getElementById("Address").value;
    document.getElementById("customerEmail").innerHTML = document.getElementById("Email").value;

    //Table Headings
    document.getElementById("item").innerHTML = "Item";
    document.getElementById("price").innerHTML = "Price";

    //variables to hold item in a string to display in the table
    var itemNameToDisplay = "";
    var itemPriceToDisplay = "";

    //add items in the orderedItemsArray to the variables above
    for(i = 0; i < orderedItemsArray.length; i++)
    {
        
        itemNameToDisplay += orderedItemsArray[i].itemName + "<br>";
        itemPriceToDisplay += "$" + orderedItemsArray[i].itemPrice + "<br>";
        
    }

    //display the strings created into the tables
    document.getElementById("itemN").innerHTML = itemNameToDisplay;
    document.getElementById("itemP").innerHTML = itemPriceToDisplay;

    //calculate the grand total by adding them up from the orderedItemsArray (itemPrice)
    for(var i = 0; i<orderedItemsArray.length; i++)
    {
        var item = orderedItemsArray[i].itemPrice;
        //console.log(item);
        grandTotal = parseFloat(item);
    }

    //display total in table on html
    document.getElementById("total").innerHTML = "Total";
    document.getElementById("totalCalculation").innerHTML = "$" +  grandTotal.toFixed(2);
    //console.log(grandTotal);
    
}


