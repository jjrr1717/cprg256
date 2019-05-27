/*insuranceApp.js
This has now been modified to include event listeners to help a user enter data.
*/
window.onload=initfunction;

var helpfulhints=["Please enter your last name","Please enter your first name","Enter your street address including City", " Enter your Postal Code", "ATTENTION!"];

var displayhints;
/*
initfunction will be called when the page loads. This will 'load' the eventlisteners. This function calls createListeners. 
*/

function initfunction() {
	//link displayhints to 'helphints' in html page
	displayhints=document.getElementById("helphints");
	//call create listeners
	createListeners(document.getElementById("lastname"),0);
	createListeners(document.getElementById("firstname"),1);
	createListeners(document.getElementById("address"),2);
	createListeners(document.getElementById("postalcode"),3);
}
/*
This function will be called from initfunction. It will accept the id element and create the focus and blur event listener
*/

function createListeners(inputobject,number) {
	inputobject.addEventListener("focus",function () {displayhints.innerHTML=helpfulhints[number];},false);//displays hint]
	inputobject.addEventListener("blur",function () {displayhints.innerHTML=helpfulhints[4];},false);//clears hint
	// notice the anonymous functions above
}

/*register function will only be called if valid data is entered into form*/
function register() {
	var name=document.getElementById("firstname").value;
	//select box "tickets" can now be enabled
	document.getElementById("tickets").disabled=false;
	alert("Welcome "+name+"\nPlease enter the number of tickets you received");
	
}
/*this function controls age and car value inputs. These will ONLY be enabled
if ticket value <4*/
function controlinfo() 
{
	var numberoftickets = parseInt(document.getElementById("tickets").value);
	//if tickets > 3 display alert box for no insurance
		if(numberoftickets>3)
		{
			alert("Hand me your keys and start riding your bike!");		
		}
		else 
		{
			//enable age,carvalue and submit button
			document.getElementById("age").readOnly=false;//note syntax of readOnly
			document.getElementById("carvalue").readOnly=false;
			document.getElementById("submitbutton").disabled=false;
			alert("Enter your age and car value");
		}
	
}

function calculatepremium() {
	//get data
	var age=parseInt(document.getElementById("age").value);
	var numberoftickets=parseInt(document.getElementById("tickets").value);
	var carvalue=parseFloat(document.getElementById("carvalue").value);	
	var message="We can do business!\n";
	//set base rate and premium
	var baserate=carvalue*0.05;
	var premium=baserate;
	//message
	message+=("Base Rate: "+premium+"\n");
		//process
			if(age<25)
			{
				premium=premium+(baserate * 0.15);
				//add to message
				message+=("Age Premium "+(baserate*0.15).toFixed(2)+"\n");
			}
			if(numberoftickets==1 || numberoftickets==2)
			{
				premium=premium+(baserate * 0.10);
				message+=("Ticket Premium: "+(baserate * 0.10).toFixed(2)+"\n");
			}
			else if (numberoftickets==3) 
			{
				premium=premium+(baserate * 0.25);
				message+=("Ticket Premium: "+(baserate * 0.25).toFixed(2)+"\n");
			}
			message+=("Total Premium: $"+premium);
			alert(message);
}