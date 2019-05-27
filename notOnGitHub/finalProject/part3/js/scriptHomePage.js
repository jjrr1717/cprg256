window.onload = initfunction;

//display the current date 
function initfunction()
{
    var todaysDate = new Date();
    var day = todaysDate.getDate();
    var month = todaysDate.getMonth();
    var year = todaysDate.getFullYear();
    var hour = todaysDate.getHours();
    var minutes = todaysDate.getMinutes();

    document.getElementById('currentDate').innerHTML = month + "/" + day + "/" + year + " " + hour + ":" + minutes;
}