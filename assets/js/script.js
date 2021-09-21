var highScoreB = document.querySelector(".high-scores");
var timeEl = document.querySelector(".time-left");
var startH = document.querySelector(".starter-header");
var questH = document.querySelector(".question-header");
var startT = document.querySelector(".starter-text");
var startB = document.querySelector("#startB");
var li1 = document.querySelector("#li1")
var li2 = document.querySelector("#li2")
var li3 = document.querySelector("#li3")
var li4 = document.querySelector("#li4")
var answersLi = document.querySelector(".answer-list");
var startT = document.querySelector("#starter-text")
var starterI = document.querySelector(".starter-items");
var index = 0;
var timeLeft = document.querySelector("#timeLeft").innerHTML
var timeCount;
var scoreSection = document.querySelector(".highNoot");
var finalScore = document.querySelector(".finalScore");
var finalB = document.querySelector(".finalB");
var scoreInput = document.querySelector("#scoreText");
var tempText = document.querySelector(".temp");
var highListSection = document.querySelector(".highListSection");
var finalScreenSection = document.querySelector(".finalScreen");
var backB = document.querySelector("#backB");
var clearB = document.querySelector("#clearB");
var lastBs = document.querySelector(".lastB");
backB.style.display = 'none'
clearB.style.display = 'none'
winner = false;
var highList = [];
var quizCont = [
    {
        question: "Commonly used data types DO NOT include",
        choice1: "1: "+ "strings",
        choice2: "2: " + "booleans",
        choice3: "3: " + "alerts",
        choice4: "4: " + "numbers",
        correctAns: '2',
    },
    {
        question: "The condition if an if/else statement is enclosed within ______",
        choice1: "1: " + "quotes",
        choice2: "2: " + "curly brackets",
        choice3: "3: " + "parenthesis",
        choice4: "4: " + "square brackets",
        correctAns: '3',
    },
    {
        question: "Arrays in JavaScript can be used to store",
        choice1: "1: " + "numbers and strings",
        choice2: "2: " + "other arrays",
        choice3: "3: " + "booleans",
        choice4: "4: " + "all of the above",
        correctAns: '4',
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        choice1: "1: " + "commas",
        choice2: "2: " + "curly brackets",
        choice3: "3: " + "quotes",
        choice4: "4: " + "parenthesis",
        correctAns: '3',
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1: " + "JavaScript",
        choice2: "2: " + "terminal/bash",
        choice3: "3: " + "for loops",
        choice4: "4: " + "console.log",
        correctAns: '4',
    }
    
]
var questions = [...quizCont];
element = "";
state = "";


function checkAnswers (event){
    var element = event.target.innerHTML[0];
    var state = quizCont[index].correctAns;
    debugger
    if (element == state){
        tempText.style.display = "contents"
        tempText.innerHTML = "Correct!"
        setTimeout(function(){
            tempText.style.display = "none";
        }, 2000)
        nextQuestion();
    } else{
        tempText.style.padding= "2px 0 0 0"
        tempText.style.display = "contents"
        tempText.innerHTML = "Wrong!"
        setTimeout(function(){
            tempText.style.display = "none";
        }, 2000)
        timeLeft = timeLeft - 10;
        nextQuestion();
    }
}
highScoreB.addEventListener('click', function(){
    highScoreB.style.display = "none"
    hideStuff();
    displayHighScores();
})
startB.addEventListener("click", function(){
    highScoreB.style.display = "none";
    starterI.style.display = "none";
    startB.style.display = "none";
    startT.style.display = "none";
    timerTime();
    displayQuestions();
} );

function displayQuestions (){
    answersLi.style.display = "contents";
    document.querySelector("section").style.alignItems = "flex-start";
    questH.innerHTML = questions[index].question;
    li1.innerHTML = questions[index].choice1;
    li2.innerHTML = questions[index].choice2;
    li3.innerHTML = questions[index].choice3;
    li4.innerHTML = questions[index].choice4; 
    answersLi.addEventListener("click", checkAnswers);
}

function nextQuestion(){
    
    index ++;
    if (index < 5){

    questH.innerHTML = questions[index].question;
    li1.innerHTML = questions[index].choice1;
    li2.innerHTML = questions[index].choice2;
    li3.innerHTML = questions[index].choice3;
    li4.innerHTML = questions[index].choice4;
} else {
    winner = true;
    hideStuff();
}
}

function hideStuff () {
    questH.style.display = "none"
    answersLi.style.display = "none";
    starterI.style.display = "none";
    startB.style.display = "none";
    startT.style.display = "none";
    tempText.style.display = "none";

}

function timerTime () {
    timer = setInterval(function (){
        if (timeLeft >= 0){
        timeLeft --;
        timeLeft.textContent = timeCount;
        document.querySelector(".time-left").innerHTML = timeLeft

            if (winner && timeLeft > 0){
            clearInterval(timer);
            document.querySelector(".time-left").innerHTML = timeLeft
            score = timeLeft;
            finalScreen();
            }
        }
        if (timeLeft === 0){
        clearInterval(timer);
        hideStuff();
        loseGame();
        }
    }, 1000)
}

function finalScreen () {
    scoreSection.style.display= "contents";
    finalScore.innerHTML = score;
    finalB.addEventListener("click", storeScore);

}


function storeScore (event) {
    event.preventDefault();
    var scoreValues = {
    score: score,
    name: scoreInput.value.trim(),
    };
    if(JSON.parse(localStorage.getItem("highScores"))== null){
    highScores = [scoreValues];
    localStorage.setItem("highScores", JSON.stringify(highScores));
    scoreInput.value = "";
    displayHighScores();
    } else{
    highScores = JSON.parse(localStorage.getItem("highScores"));
    console.log(highScores);
    highScores.push(scoreValues);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    scoreInput.value = "";
    displayHighScores();
    }
}

function loseGame () {
    location.reload();
}

function clearScores () {
    clearB.style.display = 'none'
    highListSection.style.display = 'none'
    
    localStorage.clear();
    displayHighScores();
    // highListSection.style.display = 'none'
    var noText = document.createElement("h1");
    noText.textContent = "no scores yet"

}

function displayHighScores (){
    scoreSection.style.display = "none";
    highScores = JSON.parse(localStorage.getItem("highScores"));
    document.querySelector(".topBar").style.display = "none";
    console.log(highScores);
    if (highScores != null){
        for (i = 0; i < highScores.length; i ++){
            var highListScore = highScores[i].score;
            var highListName = highScores[i].name;
            var finalLi = document.createElement("li")
            finalLi.style.listStyle = "none";
            finalLi.style.flexDirection = "column"
            finalLi.textContent =  highListName + ": " + highListScore;
            highListSection.appendChild(finalLi);
            backB.style.display = "inline-block"
            clearB.style.display = "inline-block"
        } 
    }else {
        console.log("no scores")
        var noText = document.createElement("h1");
        noText.textContent = "no scores yet"
        backB.style.display = "inline-block"
        highListSection.append(noText);
    }
}
clearB.addEventListener('click', clearScores)
backB.addEventListener('click', loseGame);