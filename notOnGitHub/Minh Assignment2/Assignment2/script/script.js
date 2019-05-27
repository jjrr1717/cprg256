
var orderInfos = [];
function appearPizza(){
    document.getElementsByClassName("pizza")[1].classList.remove("hidden");
    document.getElementsByClassName("sandwich")[1].classList.add("hidden");
    document.getElementsByClassName("drink")[1].classList.add("hidden");
}

function appearSandwich(){
    document.getElementsByClassName("pizza")[1].classList.add("hidden");
    document.getElementsByClassName("sandwich")[1].classList.remove("hidden");
    document.getElementsByClassName("drink")[1].classList.add("hidden");
}

function appearDrink(){
    document.getElementsByClassName("pizza")[1].classList.add("hidden");
    document.getElementsByClassName("sandwich")[1].classList.add("hidden");
    document.getElementsByClassName("drink")[1].classList.remove("hidden");
}

function selectSizePizza(){
    if(document.form.cheesyQuantity.value != 0 && !document.getElementById("cheesySmall").checked
    &&!document.getElementById("cheesyMedium").checked&&!document.getElementById("cheesyLarge").checked
    &&!document.getElementById("cheesyXtraLarge").checked){
        document.getElementById("cheesySmall").checked=true;
    }
    if(document.form.extraMeatQuantity.value != 0 && !document.getElementById("extraMeatSmall").checked
    &&!document.getElementById("extraMeatMedium").checked&&!document.getElementById("extraMeatLarge").checked
    &&!document.getElementById("extraMeatXtraLarge").checked){
        document.getElementById("extraMeatSmall").checked=true;
    }
    if(document.form.reallyVeggieQuantity.value != 0 && !document.getElementById("reallyVeggieSmall").checked
    &&!document.getElementById("reallyVeggieMedium").checked&&!document.getElementById("reallyVeggieLarge").checked
    &&!document.getElementById("reallyVeggieXtraLarge").checked){
        document.getElementById("reallyVeggieSmall").checked=true;
    }
}

function selectSizeDrink(){
    if(document.form.colaQuantity.value != 0 && !document.getElementById("colaSmall").checked
    &&!document.getElementById("colaMedium").checked&&!document.getElementById("colaLarge").checked){
        document.getElementById("colaSmall").checked = true;
    }

    if(document.form.spriteQuantity.value != 0 && !document.getElementById("spriteSmall").checked
    &&!document.getElementById("spriteMedium").checked&&!document.getElementById("spriteLarge").checked){
        document.getElementById("spriteSmall").checked=true;
    }

    if(document.form.rootbeerQuantity.value != 0 && !document.getElementById("rootbeerSmall").checked
    &&!document.getElementById("rootbeerMedium").checked&&!document.getElementById("rootbeerLarge").checked){
        document.getElementById("rootbeerSmall").checked=true;
    }
}

function addOrder(){
    var orderInfo = new Object();

    orderInfo['customer'] = addCustomer();
    addPizza(orderInfo);
    addSandwich(orderInfo);
    addDrink(orderInfo);
    orderInfos.push(orderInfo);
    display();
}

function addCustomer(orderInfo){
    let customerInfo = new Object();
    customerInfo['firstName']=document.form.firstname.value;
    customerInfo['lastName']=document.form.lastname.value;
    customerInfo['address']=document.form.address.value;
    customerInfo['phone']=document.form.phone.value; 
    return customerInfo;
}

function addPizza(orderInfo){
    if(document.form.cheesyQuantity.value != 0){
        orderInfo['SuperCheese']=addSuperCheese();
    }
    if(document.form.extraMeatQuantity.value != 0){
        orderInfo['ExtraMeat']=addExtraMeat();
    }
    if(document.form.reallyVeggieQuantity.value != 0){
        orderInfo['ReallyVeggie']=addReallyVeggie();
    }
}

function addSuperCheese(){
    let cheese = new Object;
    cheese['name']="Super Cheese";
    cheese['quantity']=document.form.cheesyQuantity.value;
    for(let index = 0; index < document.form.cheesySize.length; index++){
        if(document.form.cheesySize[index].checked == true){
            cheese['size']=document.form.cheesySize[index].className;
            cheese['price']=document.form.cheesySize[index].value * cheese.quantity;
            break;
        }
    }
    for(let index = 0; index < document.form.cheesyTopping.length; index++){
        if(document.form.cheesyTopping[index].checked == true){
            let count=0
            cheese['topping'+count]= document.form.cheesyTopping[index].className;
            count++;
            cheese['price']+=Number(document.form.cheesyTopping[index].value);
        }
    }
    return cheese;
}

function addExtraMeat(){
    let meat = new Object;
    meat['name']="Extra Meat";
    meat['quantity']=document.form.extraMeatQuantity.value;
    for(let index = 0; index < document.form.extraMeatSize.length; index++){
        if(document.form.extraMeatSize[index].checked == true){
            meat['size']=document.form.extraMeatSize[index].className;
            meat['price']=document.form.extraMeatSize[index].value * meat.quantity;
            break;
        }
    }
    for(let index = 0; index < document.form.extraMeatTopping.length; index++){
        if(document.form.extraMeatTopping[index].checked == true){
            let count=0;
            meat['topping'+count]= document.form.extraMeatTopping[index].className;
            count++;
            meat['price']+=Number(document.form.extraMeatTopping[index].value);
        }
    }
    return meat;
}

function addReallyVeggie(){
    let veggie = new Object;
    veggie['name']="Really Veggie";
    veggie['quantity']=document.form.reallyVeggieQuantity.value;
    for(let index = 0; index < document.form.reallyVeggieSize.length; index++){
        if(document.form.reallyVeggieSize[index].checked == true){
            veggie['size']=document.form.reallyVeggieSize[index].className;
            veggie['price']=document.form.reallyVeggieSize[index].value * veggie.quantity;
            break;
        }
    }
    for(let index = 0; index < document.form.reallyVeggieTopping.length; index++){
        if(document.form.reallyVeggieTopping[index].checked == true){
            let count=0;
            veggie['topping'+index]= document.form.reallyVeggieTopping[index].className;
            count++;
            veggie['price']+=Number(document.form.reallyVeggieTopping[index].value);
        }
    }
    return veggie;
}

function addSandwich(orderInfo){
    if(document.form.allGardenVegQuantity.value != 0){
        orderInfo['AllGarden']=addAllGardenVegetarian();
    }
    if(document.form.bigBeefOnBunQuantity.value != 0){
        orderInfo['BigBeef']=addBigBeef();
    }
    if(document.form.mixedGrillQuantity.value != 0){
        orderInfo['MixedGrill']=addMixedGrill();
    }
}

function addAllGardenVegetarian(){
    let allGarden = new Object();
    allGarden['name']= "All Garden Vegetarian";
    allGarden['quantity']=document.form.allGardenVegQuantity.value;
    allGarden['price']= 7.5 * document.form.allGardenVegQuantity.value;

    return allGarden;
}

function addBigBeef(){
    let bigBeef = new Object();
    bigBeef['name']= "Big Beef on a Bun";
    bigBeef['quantity']=document.form.bigBeefOnBunQuantity.value;
    bigBeef['price']= 8.5 * document.form.bigBeefOnBunQuantity.value;
    
    return bigBeef;
}

function addMixedGrill(){
    let mixedGrill = new Object();
    mixedGrill['name']="Mixed Grill";
    mixedGrill['quantity']=document.form.mixedGrillQuantity.value;
    mixedGrill['price']= 9.5*document.form.mixedGrillQuantity.value;

    return mixedGrill;
}

function addDrink(orderInfo){
    if(document.form.colaQuantity.value != 0){
        orderInfo['Cola']=addCola();
    }

    if(document.form.spriteQuantity.value != 0){
        orderInfo['Sprite']=addSprite();
    }

    if(document.form.rootbeerQuantity.value != 0){
        orderInfo['RootBeer']=addRootBeer();
    }
}

function addCola(){
    let cola = new Object();
    cola['name']= "Cola";
    cola['quantity']=document.form.colaQuantity.value;
    for(let index = 0; index < document.form.colaSize.length;index++){
        if(document.form.colaSize[index].checked==true){
            cola['size']=document.form.colaSize[index].className;
            cola['price']=document.form.colaSize[index].value* cola.quantity;
            break;
        }
    }

    return cola;
}

function addSprite(){
    let sprite = new Object();
    sprite['name']= "Sprite";
    sprite['quantity']=document.form.spriteQuantity.value;
    for(let index = 0; index < document.form.spriteSize.length;index++){
        if(document.form.spriteSize[index].checked==true){
            sprite['size']=document.form.spriteSize[index].className;
            sprite['price']=document.form.spriteSize[index].value* sprite.quantity;
            break;
        }
    }

    return sprite;
}

function addRootBeer(){
    let rootbeer = new Object();
    rootbeer['name']= "Root Beer";
    rootbeer['quantity']=document.form.rootbeerQuantity.value;
    for(let index = 0; index < document.form.rootbeerSize.length;index++){
        if(document.form.rootbeerSize[index].checked==true){
            rootbeer['size']=document.form.rootbeerSize[index].className;
            rootbeer['price']=document.form.rootbeerSize[index].value* rootbeer.quantity;
            break;
        }
    }

    return rootbeer;
}

function display(){
    let tempString="";
    
    for(let index=0; index < orderInfos.length; index++){
        let number = Number(index) + 1;
        let div="<div class=orderBox><p><b>"+number+"</b></p>"+
        "<p><input type=radio name=radio value="+ index+" onclick=modify(this.value)>(Select to modify)</p>";
        div+= customerString(index);
        div+= pizzaString(index);
        div+= sandwichString(index);
        div+=drinkString(index);
        div+="<p>Total Price: $" +totalPrice(index)+"</p>"+
        "<button type=button onclick=del("+index+")<i class='fas fa-trash-alt'></i>" +"</div>"
        tempString+=div;
    }
    document.getElementById("order").innerHTML=tempString;
}

function customerString(index){
    let tempString ="";

    let firstname = orderInfos[index].customer.firstName;
    let lastname =orderInfos[index].customer.lastName;
    let address = orderInfos[index].customer.address;
    let phone = orderInfos[index].customer.phone;

    tempString="<p><i>First Name: "+firstname+"</i></p>"+
    "<p><i>Last Name: "+lastname+"</i></p>"+
    "<p><i>Address: "+address+"</i></p>"+
    "<p><i>Phone Number: "+phone+"</i></p>";

    return tempString;
}

function pizzaString(index){
    let tempString=""; 
    if(orderInfos[index].hasOwnProperty('SuperCheese')){
        tempString+= superCheeseString(index);
    }
    if(orderInfos[index].hasOwnProperty('ExtraMeat')){
        tempString+= extraMeatString(index);
    }
    if(orderInfos[index].hasOwnProperty('ReallyVeggie')){
        tempString+=reallyVeggieString(index);
    }
    return tempString;
}

function superCheeseString(index){
    let tempString="";
    tempString+="<p>"+orderInfos[index].SuperCheese.quantity+" "+
    orderInfos[index].SuperCheese.size+" "+
    orderInfos[index].SuperCheese.name;
    if(orderInfos[index].SuperCheese.hasOwnProperty('topping0')){
        tempString+=" +"+orderInfos[index].SuperCheese.topping0;
    }
    if(orderInfos[index].SuperCheese.hasOwnProperty('topping1')){
        tempString+=" +"+ orderInfos[index].SuperCheese.topping1;
    }
    if(orderInfos[index].SuperCheese.hasOwnProperty('topping2')){
        tempString+=" +"+orderInfos[index].SuperCheese.topping2;
    }

    tempString+=" | Price: $"+orderInfos[index].SuperCheese.price+"</p>";
    return tempString;
}

function extraMeatString(index){
    let tempString="";
    tempString+="<p>"+orderInfos[index].ExtraMeat.quantity+" "+
    orderInfos[index].ExtraMeat.size+" "+
    orderInfos[index].ExtraMeat.name;
    if(orderInfos[index].ExtraMeat.hasOwnProperty('topping0')){
        tempString+=" + "+orderInfos[index].ExtraMeat.topping0;
    }
    if(orderInfos[index].ExtraMeat.hasOwnProperty('topping1')){
        tempString+=", "+ orderInfos[index].ExtraMeat.topping1;
    }
    if(orderInfos[index].ExtraMeat.hasOwnProperty('topping2')){
        tempString+=", "+orderInfos[index].ExtraMeat.topping2;
    }

    tempString+=" | Price: $"+orderInfos[index].ExtraMeat.price+"</p>";
    return tempString;
}

function reallyVeggieString(index){
    let tempString="";
    tempString+="<p>"+orderInfos[index].ReallyVeggie.quantity+" "+
    orderInfos[index].ReallyVeggie.size+" "+
    orderInfos[index].ReallyVeggie.name;
    if(orderInfos[index].ReallyVeggie.hasOwnProperty('topping0')){
        tempString+=" +: "+orderInfos[index].ReallyVeggie.topping0;
    }
    if(orderInfos[index].ReallyVeggie.hasOwnProperty('topping1')){
        tempString+=" +"+ orderInfos[index].ReallyVeggie.topping1;
    }
    if(orderInfos[index].ReallyVeggie.hasOwnProperty('topping2')){
        tempString+=" +"+orderInfos[index].ReallyVeggie.topping2;
    }

    tempString+=" | Price: $"+orderInfos[index].ReallyVeggie.price+"</p>";;
    return tempString;
}

function sandwichString(index){
    let tempString="";
    if(orderInfos[index].hasOwnProperty('AllGarden')){
        tempString+= allGardenString(index);
    }
    if(orderInfos[index].hasOwnProperty('BigBeef')){
        tempString+= bigBeefString(index);
    }
    if(orderInfos[index].hasOwnProperty('MixedGrill')){
        tempString+=mixedGrillString(index);
    }
    return tempString;
}

function allGardenString(index){
    let temp="";
    temp+="<p>"+orderInfos[index].AllGarden.quantity+
    " "+orderInfos[index].AllGarden.name+" | Price: $"+
    orderInfos[index].AllGarden.price+"</p>";
    return temp;
}

function bigBeefString(index){
    let temp="";
    temp+="<p>"+orderInfos[index].BigBeef.quantity+
    " "+orderInfos[index].BigBeef.name+" | Price: $"+
    orderInfos[index].BigBeef.price+"</p>";
    return temp;
}

function mixedGrillString(index){
    let temp="";
    temp+="<p>"+orderInfos[index].MixedGrill.quantity+
    " "+orderInfos[index].MixedGrill.name+" | Price: $"+
    orderInfos[index].MixedGrill.price+"</p>";
    return temp;
}

function drinkString(index){
    let tempString="";
    if(orderInfos[index].hasOwnProperty('Cola')){
        tempString+= colaString(index);
    }
    if(orderInfos[index].hasOwnProperty('Sprite')){
        tempString+= spriteString(index);
    }
    if(orderInfos[index].hasOwnProperty('RootBeer')){
        tempString+=rootBeerString(index);
    }
    return tempString;
}

function colaString(index){
    let tempString ="";
    tempString+="<p>"+orderInfos[index].Cola.quantity+
    " "+ orderInfos[index].Cola.size+" "+orderInfos[index].Cola.name+" | Price: $"+
    orderInfos[index].Cola.price+"</p>";
    return tempString;
}

function spriteString(index){
    let tempString ="";
    tempString+="<p>"+orderInfos[index].Sprite.quantity+
    " "+ orderInfos[index].Sprite.size+" "+orderInfos[index].Sprite.name+" | Price: $"+
    orderInfos[index].Sprite.price+"</p>";
    return tempString;
}

function rootBeerString(index){
    let tempString="";
    tempString+="<p>"+orderInfos[index].RootBeer.quantity+
    " "+ orderInfos[index].RootBeer.size+" "+orderInfos[index].RootBeer.name+" | Price: $"+
    orderInfos[index].RootBeer.price+"</p>";
    return tempString;
}

function totalPrice(index){
    let total =0;
    if(orderInfos[index].hasOwnProperty('SuperCheese')){
        total+=Number(orderInfos[index].SuperCheese.price);
    }
    if(orderInfos[index].hasOwnProperty('ExtraMeat')){
        total+=Number(orderInfos[index].ExtraMeat.price);
    }
    if(orderInfos[index].hasOwnProperty('ReallyVeggie')){
        total+=Number(orderInfos[index].ReallyVeggie.price);
    }
    if(orderInfos[index].hasOwnProperty('AllGarden')){
        total+=Number(orderInfos[index].AllGarden.price);
    }
    if(orderInfos[index].hasOwnProperty('BigBeef')){
        total+=Number(orderInfos[index].BigBeef.price);
    }
    if(orderInfos[index].hasOwnProperty('MixedGrill')){
        total+=Number(orderInfos[index].MixedGrill.price);
    }
    if(orderInfos[index].hasOwnProperty('Cola')){
        total+=Number(orderInfos[index].Cola.price);
    }
    if(orderInfos[index].hasOwnProperty('Sprite')){
        total+=Number(orderInfos[index].Sprite.price);
    }
    if(orderInfos[index].hasOwnProperty('RootBeer')){
        total+=Number(orderInfos[index].RootBeer.price);
    }

    return total;
}

function del(index){
    orderInfos.splice(index,1);
    display();
}

function modify(index){
    let tempObj = orderInfos[index];

    document.getElementsByClassName("changeBtn")[0].classList.remove('hidden');
    document.getElementsByClassName("formBtns")[0].classList.add('hidden');

    document.getElementById("Super Cheesy").value=0;
    document.getElementById("Extra Meat").value=0;
    document.getElementById("Really Veggie").value=0;

    document.getElementById("All Garden Vegetarian").value=0;
    document.getElementById("Big Beef on a Bun").value=0;
    document.getElementById("Mixed Grill").value=0

    for(let i=0; i< 4; i++){
        document.form.cheesySize[i].checked=false;
        document.form.extraMeatSize[i].checked=false;
        document.form.reallyVeggieSize[i].checked=false;
    }
    for(let i=0;i<3;i++){
        document.form.cheesyTopping[i].checked=false;
        document.form.extraMeatTopping[i].checked=false;
        document.form.reallyVeggieTopping[i].checked=false;
        document.form.colaSize[i].checked=false;
        document.form.spriteSize[i].checked=false;
        document.form.rootbeerSize[i].checked=false;
    }


    document.getElementById('firstname').value=tempObj.customer.firstName;
    document.getElementById('lastname').value=tempObj.customer.lastName;
    document.getElementById('address').value=tempObj.customer.address;
    document.getElementById('phone').value=tempObj.customer.phone;

    modifyPizza(tempObj);
    modifySandwich(tempObj);
    modifyDrink(tempObj);

    document.getElementById("change").value=index;
    document.getElementById("cancel").value=index
}

function modifyPizza(tempObj){
    if(tempObj.hasOwnProperty('SuperCheese')){
        document.getElementById("Super Cheesy").value = tempObj.SuperCheese.quantity;
        switch (tempObj.SuperCheese.size){
            case "Small":{
                document.form.cheesySize[0].checked = true;
                break;
            }
            case "Medium":{
                document.form.cheesySize[1].checked = true;
                break;
            }
            case "Large":{
                document.form.cheesySize[2].checked = true;
                break;
            }
            case "Extra Large":{
                document.form.cheesySize[3].checked = true;
                break;
            }
        }
        for(let index =0; index < 3;index++){
            if(tempObj.SuperCheese.hasOwnProperty('topping'+index)){
                switch(tempObj.SuperCheese['topping'+index]){
                    case "Mushroom":{
                        document.form.cheesyTopping[0].checked=true;
                        break;
                    }
                    case "Olive":{
                        document.form.cheesyTopping[1].checked=true;
                        break;
                    }
                    case "Cheese":{
                        document.form.cheesyTopping[2].checked=true;
                        break;
                    }
                }
            }
        }
    }

    if(tempObj.hasOwnProperty('ExtraMeat')){
        document.getElementById("Extra Meat").value = tempObj.ExtraMeat.quantity;
        switch (tempObj.ExtraMeat.size){
            case "Small":{
                document.form.extraMeatSize[0].checked = true;
                break;
            }
            case "Medium":{
                document.form.extraMeatSize[1].checked = true;
                break;
            }
            case "Large":{
                document.form.extraMeatSize[2].checked = true;
                break;
            }
            case "Extra Large":{
                document.form.extraMeatSize[3].checked = true;
                break;
            }
        }
        for(let index =0; index < 3;index++){
            if(tempObj.ExtraMeat.hasOwnProperty('topping'+index)){
                switch(tempObj.ExtraMeat['topping'+index]){
                    case "Mushroom":{
                        document.form.extraMeatTopping[0].checked=true;
                        break;
                    }
                    case "Olive":{
                        document.form.extraMeatTopping[1].checked=true;
                        break;
                    }
                    case "Cheese":{
                        document.form.extraMeatTopping[2].checked=true;
                        break;
                    }
                }
            }
        }
    }

    if(tempObj.hasOwnProperty('ReallyVeggie')){
        document.getElementById("Extra Meat").value = tempObj.ReallyVeggie.quantity;
        switch (tempObj.ReallyVeggie.size){
            case "Small":{
                document.form.reallyVeggieSize[0].checked = true;
                break;
            }
            case "Medium":{
                document.form.reallyVeggieSize[1].checked = true;
                break;
            }
            case "Large":{
                document.form.reallyVeggieSize[2].checked = true;
                break;
            }
            case "Extra Large":{
                document.form.reallyVeggieSize[3].checked = true;
                break;
            }
        }
        for(let index =0; index < 3;index++){
            if(tempObj.ReallyVeggie.hasOwnProperty('topping'+index)){
                switch(tempObj.ReallyVeggie['topping'+index]){
                    case "Mushroom":{
                        document.form.reallyVeggieTopping[0].checked=true;
                        break;
                    }
                    case "Olive":{
                        document.form.reallyVeggieTopping[1].checked=true;
                        break;
                    }
                    case "Cheese":{
                        document.form.reallyVeggieTopping[2].checked=true;
                        break;
                    }
                }
            }
        }
    }
}

function modifySandwich(tempObj){
    if(tempObj.hasOwnProperty('AllGarden')){
        document.getElementById("All Garden Vegetarian").value = tempObj.AllGarden.quantity;
    }
    if(tempObj.hasOwnProperty('BigBeef')){
        document.getElementById("Big Beef on a Bun").value = tempObj.BigBeef.quantity;
    }
    if(tempObj.hasOwnProperty('MixedGrill')){
        document.getElementById("Mixed Grill").value = tempObj.MixedGrill.quantity;
    }
}

function modifyDrink(tempObj){
    if(tempObj.hasOwnProperty('Cola')){
        document.getElementById("cola").value = tempObj.Cola.quantity;
        switch (tempObj.Cola.size){
            case "Small":{
                document.form.colaSize[0].checked = true;
                break;
            }
            case "Medium":{
                document.form.colaSize[1].checked = true;
                break;
            }
            case "Large":{
                document.form.colaSize[2].checked = true;
                break;
            }
        }
    }
    if(tempObj.hasOwnProperty('Sprite')){
        document.getElementById("sprite").value = tempObj.Sprite.quantity;
        switch (tempObj.Sprite.size){
            case "Small":{
                document.form.spriteSize[0].checked = true;
                break;
            }
            case "Medium":{
                document.form.spriteSize[1].checked = true;
                break;
            }
            case "Large":{
                document.form.spriteSize[2].checked = true;
                break;
            }
        }
    }
    if(tempObj.hasOwnProperty('RootBeer')){
        document.getElementById("rootbeer").value = tempObj.RootBeer.quantity;
        switch (tempObj.RootBeer.size){
            case "Small":{
                document.form.rootbeerSize[0].checked = true;
                break;
            }
            case "Medium":{
                document.form.rootbeerSize[1].checked = true;
                break;
            }
            case "Large":{
                document.form.rootbeerSize[2].checked = true;
                break;
            }
        }
    }
}

function saveModify(index){
    let orderInfo= new Object();
    orderInfo['customer'] = addCustomer();
    addPizza(orderInfo);
    addSandwich(orderInfo);
    addDrink(orderInfo);

    orderInfos[index] = orderInfo;
    display();
    document.getElementsByClassName("formBtns")[0].classList.remove('hidden');
    document.getElementsByClassName("changeBtn")[0].classList.add('hidden');
}

function cancelSelect(index){
    document.getElementsByName("radio")[index].checked=false;
    document.getElementsByClassName("formBtns")[0].classList.remove('hidden');
    document.getElementsByClassName("changeBtn")[0].classList.add('hidden');
}
