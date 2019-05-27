var xmlhttp = new XMLHttpRequest();
var content;

window.onload = loadFile;

//load JSON file and get data 
function loadFile() {
  document.querySelector("#clientSearch").addEventListener("keyup", function () { searchLastName(this.value); }, false);

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      content = JSON.parse(xmlhttp.responseText);
      //console.log(content);
    }
  }

  xmlhttp.open("GET", "rentalclients.json", true);
  xmlhttp.send();
}

//function to search by last name from JSON file
function searchLastName(lastName) {
  //get user input from textfield
  var userInput = document.getElementById("clientSearch").value;
  //console.log(userInput);

  //start table for html
  var clientInfo = "<tr><th>Select</th><th>Last Name</th><th>First Name</th></tr>"

  var clientName;
  //loop through the file, which is in content
  for (var i = 0; i < content.length; i++) {
    //put content into client array
    var client = content[i];
    //get last name
    clientName = client.last_name;

    //if last name matches what is typed in textfield
    if (clientName.startsWith(userInput)) {
      //display client info in table
      clientInfo += "<tr><td><input onclick = 'getClient(); enableNextButton();' type='radio' value=" + client.last_name + " name='client'</td><td>" + client.last_name + "</td>" +
        "<td>" + client.first_name + "</td></tr>";
    }
  }
  //diplay in html
  document.getElementById("searchResults").innerHTML = clientInfo;


}

//Select the client
function getClient() {
  //get user selection
  var userSelection = document.querySelector('input[name=client]:checked').value;
  //console.log(userSelection);

  //variables for client selected
  var clientName;
  var clientLname = "";
  var clientFname = "";
  var address = "";
  var stateProv = "";
  var email = "";
  var phone = "";

  //go through file again (which is in content) to find rest of client info
  for (var i = 0; i < content.length; i++) {
    var client = content[i];
    clientName = client.last_name;
    if (clientName == userSelection) {
      clientLname = client.last_name;
      clientFname = client.first_name;
      address = client.address;
      stateProv = client.state_prov;
      email = client.email;
      phone = client.phone;
    }
  }

  //add client info to text boxes
  document.getElementById("fName").value = clientFname;
  document.getElementById("lName").value = clientLname;
  document.getElementById("address").value = address;
  document.getElementById("state/prov").value = stateProv;
  document.getElementById("EMail").value = email;
  document.getElementById("phone").value = phone;

}

//calculate total cost of rental
function calculateTotal() {
  var vehicleTotal = 0;
  var nameExtra;
  var priceExtra;
  var extras = [];
  var extraPrices = [];
  var extraTotal = 0;
  var rentalPeriod = 0;

  //get rentalPeriod
  rentalPeriod = document.getElementById("daysRental").value;
  //console.log(rentalPeriod);
  rentalPeriod = parseFloat(rentalPeriod);

  //get the value of the vehicle
  vehicleTotal = document.querySelector("input[name='vehicleType']:checked").value;
  //console.log(vehicleTotal);

  //Get description of vehicle
  var vehicleName = "";
  switch(vehicleTotal){
    case "15":
      vehicleName = "Compact";
      break;
    case "20":
      vehicleName = "Mid-Size";
      break;
    case "35":
      vehicleName = "Luxury";
      break;
    case "40":
      vehicleName = "Van/Truck";
      break;
  }

  vehicleTotal = parseFloat(vehicleTotal);
  vehicleTotal = vehicleTotal * rentalPeriod;
  //console.log(vehicleTotal);

  //get the value of the extras and put in array
  var extraItems = document.getElementsByTagName("input");
  //console.log(extraItems);
  //loop through extra items to get information
  for (var i = 0; i < extraItems.length; i++) {
    if (extraItems[i].type ==="checkbox" && extraItems[i].checked) {
      nameExtra = extraItems[i].value;

      //test.name = extraItems[i].value;
      //console.log(itemObject.name);
      switch (extraItems[i].value) {
        case "Roof Rack":
          priceExtra = 5;
          priceExtra = parseFloat(priceExtra);
          priceExtra = priceExtra * rentalPeriod;

          //test.price = 5;
          break;

        case "Bicycle Rack":
          priceExtra = 5;
          priceExtra = parseFloat(priceExtra);
          priceExtra = priceExtra * rentalPeriod;

          //test.price = 5;
          break;

        case "GPS":
          priceExtra = 10;
          priceExtra = parseFloat(priceExtra);
          priceExtra = priceExtra * rentalPeriod;

          //test.price = 10;
          break;

        case "Child Seat":
          priceExtra = 0;
          priceExtra = parseFloat(priceExtra);
          priceExtra = priceExtra * rentalPeriod;

          //test.price = 0;
          break;
      }

      //console.log(test);
      extras.push(nameExtra);
      //console.log(extras);
      extraPrices.push(priceExtra);
      //console.log(extraPrices);
      //testArray.push(test);
      //console.log(testArray);

    }
  }

  //display customer Information
  var customerInfo = "<tr><td>" + document.getElementById("fName").value + " " + document.getElementById("lName").value + "</td></tr>";
      customerInfo += "<tr><td>" + document.getElementById("address").value + "</td></tr>";
      customerInfo += "<tr><td>" + document.getElementById("state/prov").value + "</td></tr>";
      customerInfo += "<tr><td>" + document.getElementById("EMail").value + "</td></tr>";
      customerInfo += "<tr><td>" + document.getElementById("phone").value + "</td></tr>";

  document.getElementById("customerInfo").innerHTML = customerInfo;

  //display rental summary
  var rentalSummary = "<tr><th><strong>Charges Summary</strong></th><th></th></tr>";
      rentalSummary += "<tr><td>Rental Period:</td><td>" + document.getElementById("daysRental").value + "</td></tr>"; 
      rentalSummary += "<tr><td><strong>Vehicle Type: </strong></td><td></td>";
      rentalSummary += "<tr><td>"  + vehicleName + "</td>"
      rentalSummary += "<td>$" + vehicleTotal.toFixed(2)+ "</td></tr>";

  //get extra information
  var extraTotal = 0;
  rentalSummary += "<tr><td><strong>Extras:</strong></td><td></td></tr>";
    for(var i = 0; i < extras.length; i++){
    rentalSummary += "<tr><td>" + extras[i] + "</td><td>$" + extraPrices[i].toFixed(2) + "</td></tr>";
    
    extraTotal += extraPrices[i];
  }

  //get grandTotal
  var grandTotal = vehicleTotal + extraTotal;
  rentalSummary +="<tr><td><strong>Grand Total:</strong></td>" + "<td>$" + grandTotal.toFixed(2) + "</td></tr>";
      

      
      document.getElementById("rentalSummary").innerHTML = rentalSummary;    
}

//Show the hidden rental form
function showRentalForm(evt, activeDivision){
  var buttonLinks;
  var blockedContent;
  //get the blocked division
  blockedContent = document.getElementsByClassName("showSecond");
  for(var i = 0; i < blockedContent.length; i++){
    blockedContent[i].style.display = "none";
  }

  buttonLinks = document.getElementsByClassName("buttonLinks");
  for(var j = 0; j< buttonLinks.lenght; j++){
    buttonLinks[j].className = buttonLinks[j].className.replace(" active", "");
  }
  //display the blocked content
  document.getElementById(activeDivision).style.display = "block";
  evt.currentTarget.className += " active"; 
}

//enable the next button when user selects a client
function enableNextButton(){

  var btn = document.getElementById("theForm"); 
  btn.disabled = false
}


