function storeFormElements()
{
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");

    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("lastname", lastname.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("phone", phone.value);
}

function getStoredFormElement()
{
    var firstnameStored = localStorage.getItem("firstname");
    var lastnameStored = localStorage.getItem("lastname");
    var addressStored = localStorage.getItem("address");
    var phoneStored = localStorage.getItem("phone");

    document.getElementById("firstname").value = firstnameStored;
    document.getElementById("lastname").value = lastnameStored;
    document.getElementById("address").value = addressStored;
    document.getElementById("phone").value = phoneStored;

}