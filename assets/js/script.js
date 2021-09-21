var highScoreB = document.querySelector(".high-scores");
var timeEl = document.querySelector(".time-left");
var startH = document.querySelector(".starter-header");
var questH = document.querySelector(".question-header");
var startT = document.querySelector(".starter-text");
var startB = document.querySelector("#startB");
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
var backB = document.querySelector(".backB");
backB.style.display = "none";
winner = false;
var highList = [];
var quizCont = [
    {
        question: "this is the first question",
        choice1: "1: "+ "first",
        choice2: "2: " + "second",
        choice3: "3: " + "third",
        choice4: "4: " + "fourth",
        correctAns: '1',
    },
    {
        question: "this is the 2nd question",
        choice1: "1: " + "1st",
        choice2: "2: " + "2nd",
        choice3: "3: " + "3rd",
        choice4: "4: " + "4th",
        correctAns: '2',
    },
    {
        question: "this is the 3rd question",
        choice1: "1: " + "first",
        choice2: "2: " + "second",
        choice3: "3: " + "third",
        choice4: "4: " + "fourth",
        correctAns: '3',
    },
    {
        question: "this is the 4th question",
        choice1: "1: " + "first",
        choice2: "2: " + "second",
        choice3: "3: " + "third",
        choice4: "4: " + "fourth",
        correctAns: '4',
    },
    {
        question: "this is the 5th question",
        choice1: "1: " + "first",
        choice2: "2: " + "second",
        choice3: "3: " + "third",
        choice4: "4: " + "fourth",
        correctAns: '1',
    }
    
]
var questions = [...quizCont];
element = "";
state = "";


function checkAnswers (event){
    var element = event.target.innerHTML[0];
    var state = quizCont[index].correctAns;
    if (element == state){
        tempText.innerHTML = "Correct!"
        nextQuestion();
    } else{
        tempText.style.padding= "2px 0 0 0"
        tempText.innerHTML = "Wrong!"
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

function displayHighScores (){
    scoreSection.style.display = "none";
    highScores = JSON.parse(localStorage.getItem("highScores"));
    document.querySelector(".topBar").style.display = "none";
    console.log(highScores);
    for (i = 0; i < highScores.length; i ++){
        var highListScore = highScores[i].score;
        var highListName = highScores[i].name;
        var finalLi = document.createElement("li")
        finalLi.style.listStyle = "none";
        finalLi.style.flexDirection = "column"
        finalLi.textContent =  highListName + ": " + highListScore;
        highListSection.appendChild(finalLi);
        backB.style.display = "block"
    }
}

backB.addEventListener('click', loseGame);