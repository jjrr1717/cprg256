var cakeSelection;
var sheetCakeLength;
var sheetCakeWidth;
var i = 0;
var cakeLayers;

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


function makeSelectionActive()
{
    cakeSelection = document.querySelector('input[name=cakeType]:checked').id;
    //console.log(cakeSelection);

    if(cakeSelection === "sheetCake")
    {
        document.getElementById("sheetCakeSection").disabled=false;
        document.getElementById("roundCakeSection").disabled=true;
        document.getElementById("cakeRadius").value="";
        document.getElementById("roundCakeLayer").value=0;

    }
    else if(cakeSelection === "roundCake")
    {
        document.getElementById("sheetCakeSection").disabled=true;
        document.getElementById("roundCakeSection").disabled=false;
        document.getElementById("cakeLength").value="";
        document.getElementById("cakeWidth").value="";
        document.getElementById("sheetCakeLayer").value=0;
    }
}

function calculateInvoice()
{
    //cakeSelection = document.querySelector('input[name=cakeType]:checked').id;
    console.log(cakeSelection);

    if(cakeSelection === "sheetCake")
    {
        basePrice = document.getElementById("sheetCake").value;
        basePrice = parseFloat(basePrice);
        sheetCakeLength = document.getElementById("cakeLength").value;
        sheetCakeLength = parseFloat(sheetCakeLength);
        sheetCakeWidth = document.getElementById("cakeWidth").value;
        sheetCakeWidth = parseFloat(sheetCakeWidth);

        if((sheetCakeLength*sheetCakeWidth) >900)
        {
            additionalSizePrice = ((sheetCakeLength*sheetCakeWidth)-900) *0.02;
            additionalSizePrice = parseFloat(additionalSizePrice);
            basePrice +=additionalSizePrice;
        }

        layers = document.getElementById('sheetCakeLayer');
        cakeLayers = layers.options[layers.selectedIndex].value;

        if(cakeLayers == 1)
        {
            extraLayersPrice = (basePrice + additionalSizePrice) * 0.50;
            extraLayersPrice = parseFloat(extraLayersPrice);
            basePrice +=extraLayersPrice;
        }
        else if(cakeLayers ==2)
        {
            extraLayersPrice = ((basePrice + additionalSizePrice) *0.50) *2;
            extraLayersPrice = parseFloat(extraLayersPrice);
            basePrice +=extraLayersPrice;
            
        }

        console.log(basePrice);
        cakeLayers = parseFloat(cakeLayers) + 1;
        nameOfCake = ("Sheet Cake" + sheetCakeLength + "cm " + sheetCakeWidth + "cm with " + parseFloat(cakeLayers + 1) + " layers: ");
        cakeOrdered.itemName = nameOfCake;
        cakeOrdered.itemPrice = "$" + basePrice.toFixed(2);
        orderedItemsArray.push(cakeOrdered);
    }

    if(cakeSelection === "roundCake")
    {
        basePrice = document.getElementById("roundCake").value;
        basePrice = parseFloat(basePrice);
        roundCakeRadius = document.getElementById("cakeRadius").value;
        roundCakeRadius = parseFloat(roundCakeRadius);

        if(roundCakeRadius > 706.50)
        {
            additionalSizePrice = (roundCakeRadius -706.50) *0.02;
            additionalSizePrice = parseFloat(additionalSizePrice);
            basePrice += additionalSizePrice;
        }

        layers = document.getElementById('roundCakeLayer');
        cakeLayers = layers.options[layers.selectedIndex].value;
        

        if(cakeLayers == 1)
        {
            extraLayersPrice = (basePrice + additionalSizePrice) * 0.50;
            extraLayersPrice = parseFloat(extraLayersPrice);
            basePrice +=extraLayersPrice;
        }
        else if(cakeLayers ==2)
        {
            extraLayersPrice = ((basePrice + additionalSizePrice) *0.50) *2;
            extraLayersPrice = parseFloat(extraLayersPrice);
            basePrice +=extraLayersPrice;
            
        }
        console.log(basePrice);
        cakeLayers = cakeLayers  + 1;
        var nameOfCake = ("Round Cake" + roundCakeRadius + "cm with " + cakeLayers + " layers: ");
        cakeOrdered.itemName = nameOfCake;
        cakeOrdered.itemPrice = "$" + basePrice.toFixed(2);
        orderedItemsArray.push(cakeOrdered);
    }

    if(document.querySelector('input[id=creamCheese]:checked'))
    {
        creamCheeseObject.itemName = "Cream Cheese Icing";
        creamCheeseObject.itemPrice = parseFloat(document.querySelector('input[id=creamCheese]:checked').value);
        orderedItemsArray.push(creamCheeseObject);

    }

    if(document.querySelector('input[id=fruitAlmonds]:checked'))
    {
        almondsObject.itemName = "Fruit & Almond Topping";
        almondsObject.itemPrice = parseFloat(document.querySelector('input[id=fruitAlmonds]:checked').value);
        orderedItemsArray.push(almondsObject);

    }

    if(document.querySelector('input[id=fruitJam]:checked'))
    {
        jamObject.itemName = "Fruit Jam Filling";
        jamObject.itemPrice = parseFloat(document.querySelector('input[id=fruitJam]:checked').value);
        orderedItemsArray.push(jamObject);

    }
}

function showInvoice()
{
    calculateInvoice();
    document.getElementById("title").innerHTML = "Invoice";

    document.getElementById("customerName").innerHTML = (document.getElementById('FirstName').value + " " +  
                                                            document.getElementById("LastName").value);
    document.getElementById("customerAddress").innerHTML = document.getElementById("Address").value;
    document.getElementById("postalCode").innerHTML = document.getElementById("PostalCode").value;
    document.getElementById("customerPhone").innerHTML = document.getElementById("Phone").value;
    document.getElementById("customerAddress").innerHTML = document.getElementById("Address").value;
    document.getElementById("customerEmail").innerHTML = document.getElementById("Email").value;

    document.getElementById("label").innerHTML = "Your order:";

    for(i = 0; i <orderedItemsArray.length; i++)
    {
        document.getElementById("items").innerHTML =orderedItemsArray[i].itemName + orderedItemsArray[i].itemPrice;
    }
                                                            
}


