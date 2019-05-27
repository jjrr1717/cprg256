//using ajax to retrieve content of web page
//based on example page 578 Internet and world wide web by Deitel et al


window.addEventListener("load", registerListeners, false);
var asynchRequest;

function registerListeners() {

	var img;
	img = document.getElementById("carpic1");
	img.addEventListener("mouseover", function () { getContent("exner.html"); }, false);
	img.addEventListener("mouseout", clearContent, false);
	img = document.getElementById("carpic2");
	img.addEventListener("mouseover", function () { getContent("shelbydaytona.html"); }, false);
	img.addEventListener("mouseout", clearContent, false);
	img = document.getElementById("carpic3");
	img.addEventListener("mouseover", function () { getContent("countach.html"); }, false);
	img.addEventListener("mouseout", clearContent, false);
}

function getContent(infoPage) {

	asynchRequest = new XMLHttpRequest();
	asynchRequest.onreadystatechange = function () {
		if (asynchRequest.readyState == 4 && asynchRequest.status == 200) {
			document.getElementById("carinfo").innerHTML = asynchRequest.responseText;
		}
	};
	asynchRequest.open("GET", infoPage, true);
	asynchRequest.send();
}


function clearContent() {

	document.getElementById("carinfo").innerHTML = "";

}