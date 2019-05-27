function enableFvButton() {
	document.getElementById('fvButton').disabled=false;
}

function setFormToEdit() {
	document.getElementById("principle").readOnly=false;
	document.getElementById("years").readOnly=false;
	document.getElementById("interestRate").disabled=false;
}
/*
Reads data from a form and writes it to customerdata array
*/
var customerData=[]; //this is creating an Array object

function storeData() {
	customerData[0]=document.getElementById("clientName").value;
	customerData[1]=document.getElementById("address").value;
	customerData[2]=document.getElementById("contactPhone").value;
	customerData[3]=document.getElementById("email").value;

	alert('Customer Data:\n' 
	+'\nName: '    + customerData[0] 
	+'\nAddress: ' + customerData[1] 
	+'\nPhone: '   + customerData[2]
	+'\nEmail: '   + customerData[3]
	)

	// or try the following form of ALERT: 
	// alert(customerData);

	//activate form
	setFormToEdit();
}


function calcFV()
{
	var outMessage="";//this will be sent back to the page
	var interestRate=document.getElementById("interestRate").value;
	var principle=document.getElementById("principle").value;
	var years=document.getElementById("years").value;
	
	//required values for future value formula
	var months=parseFloat(0);
	var futureValue=parseFloat(0);
	
	//parse data from html page to numbers
	interestRate=parseFloat(interestRate);
	principle=parseFloat(principle);
	years=parseFloat(years);
	
	//NOTE Interest will be calculated monthly. Need to change years to months and change
	//interest rate to a monthly rate
	months=years*12;
	interestRate=interestRate/12;
	//to make calculation easier, add 1 to interest rate
	interestRate=interestRate+1;
	//calculate future value
	futureValue=principle*Math.pow(interestRate,months);
	//use alert box
	//alert("Future Value of Investement: $"+futureValue.toFixed(2));
	//push future value back to html page
	outMessage+=customerData;
	outMessage+='\n\nFuture Value of Investement: $' + futureValue.toFixed(2);
	alert(outMessage);
}