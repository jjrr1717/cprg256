//Request data
var xhr = new XMLHttpRequest();
//reference to the file
var xmlDoc;
window.onload = load;

//load the file to get data
function load() {
    document.getElementById("searchInput").addEventListener("keyup", function () { findEmployee(this.value); }, false);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xmlDoc = xhr.responseXML;
            //console.log(xmlDoc);

        }
    };

    xhr.open("GET", "dataset.xml", true);
    xhr.send();
}

//Find the employee
function findEmployee(searchItem) {
    var i;

    document.getElementById("parsedFile").innerHTML = "";
    var textBoxValue = document.getElementById("searchItem").value;
    //variables to hold search
    var lastName = "";
    var id = "";
    var jobTitle = "";

    //get radio Selection
    var radioSelection = document.querySelector('input[name=searchBy]:checked').value;
    //console.log(radioSelection);

    //create headings in table
    var info = "<tr><th>Last Name</th><th>First Name</th><th>Id</th><th>Company</th><th>Job Title</th><th>Phone</th></tr>";

    var x = xmlDoc.getElementsByTagName("employee");
    //console.log("x: " + x);
    //perform different search depending on radion button selection
    switch (radioSelection) {
        case "lastName":
            for (i = 0; i < x.length; i++) {
                lastName = x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue;
                if (lastName.startsWith(textBoxValue)) {
                    info += "<tr><td>" +
                        x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
                        "</td></tr>";

                }
                document.getElementById("parsedFile").innerHTML = info;
            }

            break;

        case "id":

            for (i = 0; i < x.length; i++) {
                id = x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
                if (id.startsWith(textBoxValue)) {
                    info += "<tr><td>" +
                        x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
                        "</td></tr>";

                }

                document.getElementById("parsedFile").innerHTML = info;

            }

            break;

        case "jobTitle":
            for (i = 0; i < x.length; i++) {
                jobTitle = x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue;
                if (jobTitle.startsWith(textBoxValue)) {
                    info += "<tr><td>" +
                        x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue +
                        "</td><td>" +
                        x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
                        "</td></tr>";

                }

                document.getElementById("parsedFile").innerHTML = info;

            }
            break;
    }
}