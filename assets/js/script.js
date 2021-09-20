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
var answersLi = document.querySelector(".answer-list");
var startT = document.querySelector("#starter-text")
var starterI = document.querySelector(".starter-items");
var submitB = document.querySelector(".submitB");
var index = 0;
var choices = Array.from(document.querySelectorAll(".answers"));
console.log(choices)
console.log()
var quizCont = [
    {
        question: "this is the first question",
        choice1: "first",
        choice2: "second",
        choice3: "third",
        choice4: "fourth",
        correctAns: 'first',
    },
    {
        question: "this is the 2nd question",
        choice1: "1st",
        choice2: "2nd",
        choice3: "3rd",
        choice4: "4th",
        correctAns: '2nd',
    },
    {
        question: "this is the 3rd question",
        choice1: "first",
        choice2: "second",
        choice3: "third",
        choice4: "fourth",
        correctAns: 'third',
    }
    
]
var questions = [...quizCont];
element = "";
state = "";

function checkAnswers (event){
    var element = event.target.innerHTML;
    var state = quizCont[index].correctAns;
    console.log(element);
    if (element == state){
        console.log('good job');
    } else{
        console.log('dumbass');
    }
}

console.log(quizCont)
startB.addEventListener("click", function(){
    starterI.style.display = "none";
    startB.style.display = "none";
    startT.style.display = "none";
    displayQuestions();
} );

function displayQuestions (){
    answersLi.style.display = "contents";
    submitB.style.display = "contents";
    document.querySelector("section").style.alignItems = "flex-start";
    
    questH.innerHTML = questions[index].question;
    li1.innerHTML = questions[index].choice1;
    li2.innerHTML = questions[index].choice2;
    li3.innerHTML = questions[index].choice3;
    li4.innerHTML = questions[index].choice4;
    submitB.addEventListener("click", nextQuestion); 
    answersLi.addEventListener("click", checkAnswers);
    console.log(questions[index].correctAns)
}

function nextQuestion(){
    index ++;
    questH.innerHTML = questions[index].question;
    li1.innerHTML = questions[index].choice1;
    li2.innerHTML = questions[index].choice2;
    li3.innerHTML = questions[index].choice3;
    li4.innerHTML = questions[index].choice4;
    console.log(questions[index].correctAns)
}
