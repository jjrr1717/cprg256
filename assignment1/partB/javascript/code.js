var clients = [];

var i = 0;


function createClient()
{
   var client = {fName, lName, address, postalCode, phone, eMail}
   client.fName = document.getElementById("fName").value;
   client.lName = document.getElementById("lName").value;
   client.address = document.getElementById("address").value;
   client.postalCode = document.getElementById("postalCode").value;
   client.phone = document.getElementById("phone").value;
   client.eMail = document.getElementById("eMail").value;

   clients.push(client);
   displayClient();

}

function displayClient()
{
   var theClient = "";
   var deleteButton = "";
   
   for(i = 0; i < clients.length; i++)
   {
      var client = {fName, lName, address, postalCode, phone, eMail}
      theClient +=clients[i].fName + " " +  
                  clients[i].lName + " " + "<br>" + 
                  clients[i].address + " " + "<br>" + 
                  clients[i].postalCode + " " + "<br>" +
                  clients[i].phone + " " + "<br>" + 
                  clients[i].eMail;

      deleteButton += "<button type=button ";
      deleteButton += "value=" + i + " ";
      deleteButton += "onclick=deleteClient(this.value)>";
      deleteButton += "Delete" + "</button>";
      theClient += deleteButton + "<br>"
   }


   document.querySelector("#showTheClient").innerHTML = theClient;
}

function deleteClient(i)
{
   clients.splice(i,1);
	displayClient();
}

