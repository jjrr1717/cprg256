//Request data
var xhr = new XMLHttpRequest();
//reference the file
var xmlDoc;
window.onload = loadQuiz;


//variables to hold items from xml file
var questionNumber = "";
var questions = "";
var mcAnswers = [];


//function to load quiz 
function loadQuiz() {
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xmlDoc = xhr.responseXML;

        }
    };

    xhr.open("GET", "finalquiz.xml", true);
    xhr.send();

}

//function to add questions to display
function displayQuiz() {
    document.getElementById("gradeQuiz").style.visibility = "hidden";

    //for loop
    var i;

    //get the questions and answers
    var x = xmlDoc.getElementsByTagName("question");

    //get the information from the xml file
    var question = "";
    for (i = 0; i < x.length; i++) {
        questionNumber = x[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue;
        questions = x[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue;
        mcAnswers.push(x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue);
        mcAnswers.push(x[i].getElementsByTagName("b")[0].childNodes[0].nodeValue);
        mcAnswers.push(x[i].getElementsByTagName("c")[0].childNodes[0].nodeValue);
        mcAnswers.push(x[i].getElementsByTagName("d")[0].childNodes[0].nodeValue);
      
        //display contents in html
        question += "<br><span id = 'questions'>Question " + questionNumber + ":" + "</span><br><br>" +
            questions + "<br><br>";
 
        //loop through mcAnswers
        for (var j = 0; j < mcAnswers.length; j++) {

            question += "<input type='radio' id=" + i + " name=" + i + " value=" + j + ">" + mcAnswers[j] + "<br>";
            
        }

        document.getElementById("quizLocation").innerHTML = question;
        //clear array for next batch
        while (mcAnswers.length) {
            mcAnswers.pop();
        };
    }

}

//hide Start Quiz button and show Grade Quiz button
function showGradeButton() {
    document.getElementById("gradeQuiz").style.visibility = "visible";
    document.getElementById("showQuiz").style.visibility = "hidden";
}

//grade the quiz
function gradeQuiz()
{
    document.getElementById("gradeQuiz").disabled = true;
    //get Correct answers
    var a = xmlDoc.getElementsByTagName("rightanswers")[0];
    //console.log(a);
    var aTwo = a.childNodes[0];
    //console.log(aTwo);
    var aThree = aTwo.nodeValue;
    //console.log(aThree);
    var correctAnswersList = aThree.split(",");
    //console.log(correctAnswersList);

    //get the users answers 
    var userAnswerOne = document.querySelector("input[name='0']:checked").value;
    var userAnswerTwo = document.querySelector("input[name='1']:checked").value;
    var userAnswerThree = document.querySelector("input[name='2']:checked").value;
    var userAnswerFour = document.querySelector("input[name='3']:checked").value;
    var userAnswerFive = document.querySelector("input[name='4']:checked").value;

    //counter for correct questions answered
    var correctCounter = 0;

    //convert correct answers to integers to compare with answers
    var correctAnswerOne = getLetterToNum(correctAnswersList[0]);
    var correctAnswerTwo = getLetterToNum(correctAnswersList[1]);
    var correctAnswerThree = getLetterToNum(correctAnswersList[2]);
    var correctAnswerFour = getLetterToNum(correctAnswersList[3]);
    var correctAnswerFive = getLetterToNum(correctAnswersList[4]);
    //console.log(correctAnswerOne);
  
    //compare user answers with correct answers - add to correctCounter if correct
    if(userAnswerOne == correctAnswerOne){
        correctCounter++;
    }
    if(userAnswerTwo == correctAnswerTwo){
        correctCounter++;
    }
    if(userAnswerThree == correctAnswerThree){
        correctCounter++;
    }
    if(userAnswerFour == correctAnswerFour){
        correctCounter++;
    }
    if(userAnswerFive == correctAnswerFive){
        correctCounter++;
    }

    //display results
    document.getElementById("results").innerHTML = "Your Score: " + correctCounter + "/5";
}

//function used to convert the letter answer key to numeric 
function getLetterToNum(questionNumber)
{
    //a=0, b=1,c=2, d=3
    var letterToNum = -1;
    switch(questionNumber)
    {
        case "a":
        letterToNum = 0;
        break;
        case "b":
        letterToNum = 1;
        break;
        case "c":
        letterToNum = 2;
        break;
        case "d":
        letterToNum = 3;
        break; 
    }

    return letterToNum;
}