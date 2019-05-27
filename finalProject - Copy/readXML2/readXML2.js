function loaddata() {

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      displayData(xhr);
    }
  };

  xhr.open("GET", "readXML2.xml", true);
  xhr.send();
}

function displayData(xhr) {

  var xmldoc = xhr.responseXML;

  var x = xmldoc.querySelectorAll("records")[0].childNodes[0].nodeValue;
  var output = x.split(",");

  document.querySelector("#showIt").innerHTML = output;
}