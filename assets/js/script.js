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
var startT = document.querySelector("#starter-text")
var starterI = document.querySelector(".starter-items");
var submitB = document.querySelector(".submitB");
var index = 0;
var questionLi = ["this is the first question","this is the second question","this is the third question",
"this is the fourth question","this is the fifth question","this is the 6th question"]

var ans1 = ["first","second","third","fourth"];
var ans2 = ["1st","2nd","3rd","4th"];
var ans3 = ["uno","dos","tres","quatro"];
var ansArray = [ans1, ans2, ans3];
console.log(ansArray)
startB.addEventListener("click", function(){
    starterI.style.display = "none";
    startB.style.display = "none";
    startT.style.display = "none";
    displayQuestions();
} );

function displayQuestions (){
   
    document.querySelector("section").style.alignItems = "flex-start";
    answersLi.style.display = "contents";
    submitB.style.display = "contents";
    questH.innerHTML = questionLi[index];
    li1.innerHTML = ansArray[index][0];
    li2.innerHTML = ansArray[index][1];
    li3.innerHTML = ansArray[index][2];
    li4.innerHTML = ansArray[index][3];
    submitB.addEventListener("click",function(){
    index = index +1;
    questH.innerHTML = questionLi[index];
    li1.innerHTML = ansArray[index][0];
    li2.innerHTML = ansArray[index][1];
    li3.innerHTML = ansArray[index][2];
    li4.innerHTML = ansArray[index][3];
    
    })  
}