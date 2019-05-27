//11.js

//register function will only be called if valid data is entered into form
function register() {
	var name=document.getElementById("firstname").value;
	//select box "tickets" can now be enabled
	document.getElementById("tickets").disabled=false;
	alert("Welcome "+name+"\nPlease enter the number of tickets you received");
	
}
//this function controls age and car value inputs. These will ONLY be enabled if ticket value < 4
function controlInfo() 
{
	var numberOfTickets = parseInt(document.getElementById("tickets").value);
	//if tickets > 3 display alert box for no insurance
		if(numberOfTickets>3)
	{
		alert("Hand me your keys and start riding your bike!");		
	}
	else 
	{
		//enable age,carvalue and submit button
		document.getElementById("age").readOnly=false;//note syntax of readOnly
		document.getElementById("carvalue").readOnly=false;
		document.getElementById("submitButton").disabled=false;
		alert("Enter your age and car value");
	}
}

function calculatePremium() {
	//get data
	var age=parseInt(document.getElementById("age").value);
	var numberOfTickets=parseInt(document.getElementById("tickets").value);
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
		premium+=(baserate * 0.15);
		//add to message
		message+=("Age Premium "+(baserate*0.15).toFixed(2)+"\n");
	}
	if(numberOfTickets!=1 || numberOfTickets==2)
	{
		premium+=(baserate * 0.10);
		message+=("Ticket Premium: "+(baserate * 0.10).toFixed(2)+"\n");
	}
	else if (numberOfTickets==3) 
	{
		premium+=(baserate * 0.25);
		message+=("Ticket Premium: "+(baserate * 0.25).toFixed(2)+"\n");
	}
	message+=("Total Premium: $"+premium);
	alert(message);
}