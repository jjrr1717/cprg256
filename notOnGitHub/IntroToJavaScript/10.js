window.onload=initfunction;

function initfunction()
{
	var toDay = new Date();	
	document.getElementById("dtfield").innerHTML = toDay;
}

function buttonandchecks()
{
	var x;
	var message="";
	var resultmessage="";
	var giftamount=parseFloat(0);
	var radio_value; //get value from radio button
	var totalvalue=parseInt(0); //initialize this to 0

//use query selector
	radio_value=document.querySelector('input[name=specialty]:checked').value;
//parse radio_value to a float
	radio_value=parseFloat(radio_value);

//if statements to get the values from the check boxes
	if(document.querySelector('input[name=earrings]:checked'))
		{
		giftamount+=parseFloat(document.querySelector('input[name=earrings]:checked').value);
		message=(message+" Earrings");
		}
	if(document.querySelector('input[name=watch]:checked'))
		{
		giftamount+=parseFloat(document.querySelector('input[name=watch]:checked').value);
		message=(message+" Watch");
		}
	if(document.querySelector('input[name=necklace]:checked'))
		{
		giftamount+=parseFloat(document.querySelector('input[name=necklace]:checked').value);
		message=(message+" Necklace");
		}
//calculate total cost of gift
totalvalue=radio_value+giftamount;

resultmessage=("Your Box will cost "+ radio_value.toFixed(2) + " And your box contains: " + message + " for a total cost: " + totalvalue.toFixed(2));

document.getElementById("result").innerHTML=resultmessage;
}