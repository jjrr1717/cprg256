var objectArray=[];
var i=0; //index

//reads items from form, creates clientobject and puts into objectArray
function addToArray() {
	//clientObject is an object
	var clientObject={lastName,firstName,address,postalCode};
	clientObject.lastName=document.getElementById("lastName").value;
	clientObject.firstName=document.getElementById("firstName").value;
	clientObject.address=document.getElementById("address").value;
	clientObject.postalCode=document.getElementById("postalCode").value;
	objectArray.push(clientObject);
	displayList();

}
/*
This is a 'for' loop that reads each element from objectArray.
Each iteration creates a string value that will be displayed as a radio button
Each radio button will have a value of i from 0 to length of objectArray-1
Any of the items can be deleted by selecting one of the radio buttons
This function is also called after deleteItem is called in order to reset the value items.
*/
function displayList() {
	var client;
	var displayRadioButtons=""
	
	for(var i=0; i< objectArray.length;i++)
 		{
 			
 			//local instance of book
 		var clientObject={lastName,firstName,address,postalCode};
 		clientObject=objectArray[i];//read element from object array
 		//create client string by appending variables from client object
 		client=clientObject.lastName + " , "+clientObject.firstName+" , "+clientObject.address+" , "+clientObject.postalCode;
 		
 		//create radio button elements
 		displayRadioButtons+="<input type=radio name=listitem ";
 		displayRadioButtons+=" value="+i+" ";
 		displayRadioButtons+=" onchange=deleteItem(this.value)>";//this function will be called if the radio button is selected
 		displayRadioButtons+=client+"<br>";
 		
 		
 		}
 		
//display list
// document.getElementById("showList").innerHTML=displayRadioButtons;
document.querySelector("#showList").innerHTML=displayRadioButtons;
}
//this function will delete any item from the list
//it uses 'splice' that requires 2 variables: the index value and how many values to delete
function deleteItem(i) {
	objectArray.splice(i,1);//deletes 1 item at index i
	displayList();//display modified list
	
}