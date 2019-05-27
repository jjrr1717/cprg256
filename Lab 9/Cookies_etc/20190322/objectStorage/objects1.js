function demoObjects() {	
	// create a JSON object
	var jsObject = { "name":"John", "age": 22, "city":"Calgary" };

		// The JSON.stringify() method converts a JavaScript value to a JSON string.

	var myJSON = JSON.stringify(jsObject); 

	// save data to localStorage
	localStorage.setItem("testJsObject", myJSON);

	// save data to sessionStorage
	sessionStorage.setItem("testJsObject", myJSON);

	// get saved data from localStorage
	var localData = localStorage.getItem("testJsObject");	

	// get saved data from sessionStorage
	var sessionData = sessionStorage.getItem("testJsObject");

		// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
	
	var obj = JSON.parse(localData);
	document.getElementById("localData").innerHTML = obj.name + "-" + obj.age + "-" + obj.city + "<br>";
	
	obj = JSON.parse(sessionData);
	document.getElementById("sessionData").innerHTML = obj.name + " | " + obj.age + " | " + obj.city + "<br>";

	// remove saved data from sessionStorage
	sessionStorage.removeItem("testJsObject");
	// remove saved data from localStorage
	localStorage.removeItem("testJsObject");

	// remove all saved data from localStorage
	localStorage.clear();

	// remove all saved data from sessionStorage
	sessionStorage.clear();
}