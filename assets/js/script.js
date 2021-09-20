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
var selections = Array.from(document.querySelectorAll(".select"));
console.log(selections)
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
        correctAns: 'choice2',
    },
    {
        question: "this is the 3rd question",
        choice1: "first",
        choice2: "second",
        choice3: "third",
        choice4: "fourth",
        correctAns: 'choice3',
    }
    
]
var questions = [...quizCont];
element = "";
state = "";

function checkAnswers (event){
    var element = e.target;
    var state = quizCont[index].correctAns
    // console.log(questions[index].choice1)
    console.log(choices[index].choice1)
    console.log(event.target);
    if (element == state){
        console.log('good job')
    } else{
        console.log('dumbass')
    }
}

// var questionLi = ["this is the first question","this is the second question","this is the third question",
// "this is the fourth question","this is the fifth question","this is the 6th question"]
// var ans1 = ["first","second","third","fourth"];
// var ans2 = ["1st","2nd","3rd","4th"];
// var ans3 = ["uno","dos","tres","quattro"];
// var ans4 = ["1ne","2wo","3ree","4our"];
// var ans5 = ["5","6","7","8"];
// var ans6 = ["tell me why","hey now","party rock","i tried so hard"];
// var ansArray = [ans1, ans2, ans3, ans4,ans5,ans6];
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
    // selections.addEventListener("click", checkAnswers);
    // answersLi.addEventListener("click", checkAnswers);
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

// function checkAnswers (){
//     if (choice3.clicked){
//         console.log("thats right!")
//     } else {
//         console.log("ooof wrong answer idiot")
//     }
// }
