function check() {

var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var correct = 0;

    if(question2 == "Geoguessr") {
        correct++;
    }

    if(question3 == "Goddess Lakshmi") {
        correct++;
    }

    if(question4 == "8") {
        correct++;
    }

    if(question5 == "Yash") {
        correct++;
    }

    if(question6 == "Anne Frank") {
        correct++;
    }

    if(question7 == "Ananya") {
        correct++;
    }

    if(question8 == "Taylor Swift") {
        correct++;
    }

    if(question9 == "Anemia") {
        correct++;
    }

var messages = ["We are BFFs <3" , "You were okish" , "ew, you're like a stranger to me :'("  ];
var pictures = ["img/first.gif", "img/mid.gif" , "img/last.gif"];
var range;

    if (correct < 2) {
        range = 2;
    }

    if(correct > 1 && correct < 7) {
        range = 1;
    }

    if(correct > 6) {
        range = 0;
    }

    
document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = pictures[range];
window.scrollTo(0,0);
}