// Searchable JSON data
var xhr = new XMLHttpRequest();
var r;

window.onload = loadJSON;

function loadJSON() {
	//create the event listeners
	document.querySelector("#fullname").addEventListener("keyup", function () { searchFullName(this.value); }, false);
	document.querySelector("#idnumber").addEventListener("keyup", function () { searchIDNumber(this.value); }, false);
	document.querySelector("#company").addEventListener("keyup", function () { searchCompanyName(this.value); }, false);

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			r = JSON.parse(xhr.responseText);
			//displayData(r);
		}
	}
	xhr.open("GET", "jsonSearchData.json", true);
	xhr.send();
}

function searchFullName(fullname) {

	//var r=JSON.parse(xhr.responseText);
	document.querySelector("#searchvalue").innerHTML = "Search by Full Name" + "<br>";
	//structure table
	var output = "<tr><th>Full Name</th><th>Address</th><th>City </th><th>ID Number</th><th>Company</th></tr>";
	var searchname;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
		searchname = obj.name;
		if (searchname.startsWith(fullname)) {

			output += "<tr><td>"
			output += obj.name;
			output += "</td><td>"
			output += obj.address
			output += "</td><td>"
			output += obj.city
			output += "</td><td>"
			output += obj.idnumber
			output += "</td><td>"
			output += obj.company
			output += "</td></tr>";
		}

	}
	document.querySelector("#searchresults").innerHTML = output;

}
function searchIDNumber(idnumber) {

	//var r=JSON.parse(xhr.responseText);
	document.querySelector("#searchvalue").innerHTML = "Search by ID Number" + "<br>";
	//structure table
	var output = "<tr><th>Full Name</th><th>Address</th><th>City </th><th>ID Number</th><th>Company</th></tr>";
	var searchid;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
		searchid = obj.idnumber;
		if (searchid.startsWith(idnumber)) {

			output += "<tr><td>"
			output += obj.name;
			output += "</td><td>"
			output += obj.address
			output += "</td><td>"
			output += obj.city
			output += "</td><td>"
			output += obj.idnumber
			output += "</td><td>"
			output += obj.company
			output += "</td></tr>";
		}

	}
	document.querySelector("#searchresults").innerHTML = output;

}

function searchCompanyName(company) {

	//var r=JSON.parse(xhr.responseText);
	document.querySelector("#searchvalue").innerHTML = "Search by Company name" + "<br>";
	//structure table
	var output = "<tr><th>Full Name</th><th>Address</th><th>City </th><th>ID Number</th><th>Company</th></tr>";
	var searchcompany;
	for (var i = 0; i < r.length; i++) {
		var obj = r[i];
		searchcompany = obj.company;
		if (searchcompany.startsWith(company)) {

			output += "<tr><td>"
			output += obj.name;
			output += "</td><td>"
			output += obj.address
			output += "</td><td>"
			output += obj.city
			output += "</td><td>"
			output += obj.idnumber
			output += "</td><td>"
			output += obj.company
			output += "</td></tr>";
		}

	}
	document.querySelector("#searchresults").innerHTML = output;

}