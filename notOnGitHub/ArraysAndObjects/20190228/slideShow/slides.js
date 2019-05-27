window.onload = initLinks;

var myPix = new Array("images/1.jpg","images/2.jpg","images/3.jpg");
var thisPic = 0;

function initLinks() {
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processNext() {
	thisPic++;
	//once thisPic has reached the maximum number of pictures reset it back to 0
	if (thisPic == myPix.length) {
		thisPic = 0;
	}
	document.getElementById("myPicture").src = myPix[thisPic]; //grabbing the element in the array through the index
	return false; // prevent redirection to another href link.
}

function processPrevious() {
	if (thisPic == 0) {
		thisPic = myPix.length;
	}
	thisPic--;
	document.getElementById("myPicture").src = myPix[thisPic];
	return false; // prevent redirection to another href link.
}
