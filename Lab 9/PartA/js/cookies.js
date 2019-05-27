//set the cookie 
function setCookies(name, value, daysToExpiry)
{
    //get the current date to add to expiry
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpiry*24*60*60*1000));
    var expires = "expires=" + date.toGMTString();
    //set it up as a name-value pair
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    
}

//get the cookie
function getCookie(name)
{
    
    //the beginning of the name-value pair
    var cookieName = name + "=";

    //decode the cookie
    var decodeCookie = decodeURIComponent(document.cookie);

    //put all the values in an array
    var cookieArray = decodeCookie.split(';');

    //loop through the array to find the cookie
    for(var i = 0; i < cookieArray.length; i++)
    {
        //assign value to variable
        var singleCookie = cookieArray[i];
        //is there a space between?? 
        while(singleCookie.charAt(0) == ' ')
        {
            singleCookie = singleCookie.substring(1);
        }
        if(singleCookie.indexOf(cookieName) == 0)
        {
            return singleCookie.substring(cookieName.length, singleCookie.length);
        }

        // if cookie doesn't exit return nothing
        return "";
    }
}

//set customerName cookie
function setCustomerNameCookie()
{
    var customer = document.getElementById("customer").value;

    setCookies("customerName", customer, 365);
    console.log("setCustomerNameCookie: " + customer);

}

//set lastVisit cookie
function setLastVisitCookie()
{
    //create date 
    var theDate = new Date();
    setCookies("lastVisit", theDate, 1);
    console.log("setLastVisitCookie: " + theDate);
    
}

//check to see if cookie exists
function checkCookies()
{
 
    var customer = getCookie("customerName");
    var visit = getCookie("lastVisit");

    console.log(customer);
    console.log(visit);
  
    /*should also have && visit !="" - however, it will not get two cookies for some reason.
    If I could get feedback about why this is not working that would be great!*/
    if(customer !="")
    {
        var message = "Welcome back " + customer;
        document.getElementById("customizedMessage").innerHTML = message;
        var visitMessage = "Your last visit was " + visit;
        document.getElementById("lastVisitMessage").innerHTML = visitMessage;
        
    }
    else
    {
        var message = "Welcome New Customer!";
        document.getElementById("customizedMessage").innerHTML = message;
        
    }
}


