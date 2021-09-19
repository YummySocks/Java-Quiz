var highScore = document.querySelector(".high-scores");
var timeEl = document.querySelector(".time-left");
var startH = document.querySelector(".starter-header");
var questH = document.querySelector(".question-header");
var startT = document.querySelector(".starter-text");
var li1 = document.querySelector("#li1");
var li2 = document.querySelector("#li2");
var li3 = document.querySelector("#li3");
var li4 = document.querySelector("#li4");
var startB = document.querySelector("#startB");
var answersLi = document.querySelector(".answers");
var starterI = document.querySelector(".starter-items");
var submitB = document.querySelector(".submitB")

var questionLi = ["this is the first question","this is the second question","this is the third question",
"this is the fourth question","this is the fifth question","this is the 6th question"]

var firstAns = ["first","second","third","fourth"];
var secAns = ["1st","2nd","3rd","4th"];
var ansArray = [firstAns, secAns];
console.log(ansArray)
startB.addEventListener("click", function(){
    starterI.style.display = "none";
    startB.style.display = "none"
    displayQuestions();
} );

function displayQuestions (){
    document.querySelector("section").style.alignItems = "flex-start";
    answersLi.style.display = "contents";
    submitB.style.display = "contents";
    questH.innerHTML = questionLi[0];
    li1.innerHTML = ansArray[0][0];
    li2.innerHTML = ansArray[0][1];
    li3.innerHTML = ansArray[0][2];
    li4.innerHTML = ansArray[0][3];
}


