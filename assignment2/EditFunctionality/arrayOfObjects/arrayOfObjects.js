var objectArray = []; //array
var indexValue = 0; //used as global for modifyItem

function addToArray() {
  //read items from form and create client object
  var clientObject = {
    lastName,
    firstName,
    address,
    postalCode,
    info: [],
    asset: []  //Arrays inside the client object!!
  };
  //input variables into clientObject
  clientObject.lastName = document.getElementById("lastName").value;
  clientObject.firstName = document.getElementById("firstName").value;
  clientObject.address = document.getElementById("address").value;
  clientObject.postalCode = document.getElementById("postalCode").value;
  //alert("Client Name: "+clientObject.firstName+" "+clientObject.lastName);
  //load into objectArray
  //get radio buttons
  var businessType = document.querySelector("input[name=businessType]:checked").value;
  var residence = document.querySelector("input[name=residence]:checked").value;
  //push these into the info array inside client object
  clientObject.info.push(businessType);
  clientObject.info.push(residence);
  //push asset values
  if (document.querySelector("input[name=truck]:checked")) {
    clientObject.asset.push("truck");
  }
  if (document.querySelector("input[name=car]:checked")) {
    clientObject.asset.push("car");
  }
  if (document.querySelector("input[name=rv]:checked")) {
    clientObject.asset.push("rv");
  }

  objectArray.push(clientObject);

  displayList(); //display object array
}

function displayList() {
  //variables
  var clientlist = ""; //this will be the list of elements in the array list
  var displayRadiobuttons = ""; //display elements as a list of radio buttons

  for (var i = 0; i < objectArray.length; i++) {
    //local instance of clientObject
    var clientObject = {
      lastName,
      firstName,
      address,
      postalCode,
      info: [],
      asset: []
    };
    clientObject = objectArray[i];
    clientlist =
      clientObject.lastName +
      "," +
      clientObject.firstName +
      "," +
      clientObject.address +
      "," +
      clientObject.postalCode;
    //use for loop to go through info and asset arrays
    for (var x = 0; x < clientObject.info.length; x++) {
      clientlist += clientObject.info[x] + " ";
    }
    for (var x = 0; x < clientObject.asset.length; x++) {
      clientlist += clientObject.asset[x] + " ";
    }

    //create radio button tags and elements

    displayRadiobuttons += "<input type=radio name=listitem ";
    displayRadiobuttons += " value=" + i + " ";
    displayRadiobuttons += " onchange=modifyItem(this.value)>";
    displayRadiobuttons += clientlist + "</>";
    displayRadiobuttons += '<button onclick=deleteItem(this.value); return false; value=' + i + '>Delete</button><br>';
    
  }
  //display list
  document.getElementById("showlist").innerHTML = displayRadiobuttons;
}

// delete item from objectarry at index i using splice
function deleteItem(i) {
	//delete ONE  item at index i	
	objectArray.splice(i,1);
	//display modified list
	displayList();
}

function modifyItem(i) {
  indexValue = i; //need this
  var dataItem;
  var clientObject = {
    lastName,
    firstName,
    address,
    postalCode,
    info: [],
    asset: []
  };
  
  clientObject = objectArray[i];
  //change buttons
  document.getElementById("submit").disabled = true;
  document.getElementById("edit").disabled = false;
  //load data into form
  document.getElementById("lastName").value = clientObject.lastName;
  document.getElementById("firstName").value = clientObject.firstName;
  document.getElementById("address").value = clientObject.address;
  document.getElementById("postalCode").value = clientObject.postalCode;
  //load data from info and asset
  //info will only contain 2 items, so these can be accessed directly
  dataItem = clientObject.info[0];
  if (dataItem == "commercial") {
    document.register.businessType[0].checked = true;
  } //must be residential
  else {
    document.register.businessType[1].checked = true;
  }
  //residence
  dataItem = clientObject.info[1];
  if (dataItem == "city") {
    document.register.residence[0].checked = true;
  } else {
    document.register.residence[1].checked = true;
  }

  //reset the checkboxes to unchecked
  document.register.truck.checked = false;
  document.register.car.checked = false;
  document.register.rv.checked = false;

  //use a for loop to load check boxes
  //check if asset length >0
  if (clientObject.asset.length > 0) {
    for (var i = 0; i < clientObject.asset.length; i++) {
      dataItem = clientObject.asset[i];
      if (dataItem == "truck") {
        document.register.truck.checked = true;
      }

      if (dataItem == "car") {
        document.register.car.checked = true;
      }

      if (dataItem == "rv") {
        document.register.rv.checked = true;
      }
    }
  }
}

function setClientObject() {
  //the global value for indexValue was set in the previous function
  //load data
  var clientObject = {
    lastName,
    firstName,
    address,
    postalCode,
    info: [],
    asset: []
  };
  //input variables into clientObject
  clientObject.lastName = document.getElementById("lastName").value;
  clientObject.firstName = document.getElementById("firstName").value;
  clientObject.address = document.getElementById("address").value;
  clientObject.postalCode = document.getElementById("postalCode").value;
  //alert("Client Name: "+clientObject.firstName+" "+clientObject.lastName);
  //load into objectArray
  //get radio buttons
  var businessType = document.querySelector("input[name=businessType]:checked").value;
  var residence = document.querySelector("input[name=residence]:checked").value;
  //push these into the info array inside client object
  clientObject.info.push(businessType);
  clientObject.info.push(residence);
  //push asset values
  if (document.querySelector("input[name=truck]:checked")) {
    clientObject.asset.push("truck");
  }
  if (document.querySelector("input[name=car]:checked")) {
    clientObject.asset.push("car");
  }
  if (document.querySelector("input[name=rv]:checked")) {
    clientObject.asset.push("rv");
  }

  objectArray[indexValue] = clientObject;
  //reset submit button
  document.getElementById("submit").disabled = false;
  document.getElementById("edit").disabled = true;
  displayList(); //display object array
}