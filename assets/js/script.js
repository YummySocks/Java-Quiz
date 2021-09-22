// storing the unholy number of variables needed for code to work
var highScoreB = document.querySelector(".high-scores");
var timeEl = document.querySelector(".time-left");
var startH = document.querySelector(".starter-header");
var questH = document.querySelector(".question-header");
var startT = document.querySelector(".starter-text");
var startB = document.querySelector("#startB");
var li1 = document.querySelector("#li1");
var li2 = document.querySelector("#li2");
var li3 = document.querySelector("#li3");
var li4 = document.querySelector("#li4");
var answersLi = document.querySelector(".answer-list");
var startT = document.querySelector("#starter-text")
var starterI = document.querySelector(".starter-items");
var index = 0;
var timeLeft = document.querySelector("#timeLeft").innerHTML;
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
var tempSection = document.querySelector(".temporary");
var scoreH = document.querySelector(".scoreH");
// sets styles to hide them so screen can look pretty
scoreH.style.display = "none";
tempSection.style.display ="none";
backB.style.display = 'none';
clearB.style.display = 'none';
// sets default values for items
winner = false;
var questions = [];
var highList = [];
// full array of questions choices and right answers
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
    
];
var questions = [...quizCont];
element = "";
state = "";

// depending on the index checks to see if the clicked list item has the same string value as the correct ans
function checkAnswers (event){
    var element = event.target.innerHTML[0];
    var state = quizCont[index].correctAns;
    if (element == state){
        tempSection.style.display = "block";
        tempText.style.display = "block";
        tempText.innerHTML = "Correct!";
        setTimeout(function(){
            tempText.style.display= "none";
            tempSection.style.display = "none";
        }, 500);
        nextQuestion();
    } else{
        tempSection.style.display = "block";
        tempText.style.display = "block";
        tempText.innerHTML = "Wrong!";
        setTimeout(function(){
            tempText.style.display= "none";
            tempSection.style.display = "none";
        }, 500);
        timeLeft = timeLeft - 10;
        nextQuestion();
    }
}
// shows the high scores using the button on the start screen
highScoreB.addEventListener('click', function(){
    highScoreB.style.display = "none";
    hideStuff();
    displayHighScores();
})
// hides starting text and runs the display questions and starts the timer
startB.addEventListener("click", function(){
    highScoreB.style.display = "none";
    starterI.style.display = "none";
    startB.style.display = "none";
    startT.style.display = "none";
    timerTime();
    displayQuestions();
} );
// cycles through the index of questions and runs the check answers function on click
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
// goes to the next question and once the last question is answered will move to the name input screen
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
    setTimeout(hideStuff, 1000);
}
}
// hides the question content for when displaying the final screen
function hideStuff () {
    questH.style.display = "none"
    answersLi.style.display = "none";
    starterI.style.display = "none";
    startB.style.display = "none";
    startT.style.display = "none";
    tempText.style.display = "none";

}
// timer that counts down and changes innerHTML to reflect 
function timerTime () {
    timer = setInterval(function (){
        if (timeLeft >= 0){
        timeLeft.textContent = timeCount;
        timeLeft --;
        document.querySelector(".time-left").innerHTML = timeLeft
            // checks if there are no more questions and stores the time left as the score
            if (winner && timeLeft > 0){
            clearInterval(timer);
            document.querySelector(".time-left").innerHTML = timeLeft
            score = timeLeft;
            setTimeout(finalScreen, 1000);
            }
        }
        if (timeLeft === 0){
        clearInterval(timer);
        hideStuff();
        loseGame();
        }
    }, 1000);
}
// score input screen that displays what your results are
function finalScreen () {
    scoreH.style.display = "contents"
    scoreSection.style.display= "contents";
    finalScore.innerHTML = score;
    finalB.addEventListener("click", storeScore);

}

// stores the score and name into local storage as an array of objects 
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
// runs if the timer hits 0 and forces a refresh
function loseGame () {
    location.reload();
}
// on the high scores page clicking this will cause the local storage to be cleared and if there are no scores to clear will display as such
function clearScores () {
    clearB.style.display = 'none'
    highListSection.style.display = 'none'
    localStorage.clear();
    var noText = document.createElement("h1");
    noText.textContent = "no scores yet"
    displayHighScores();

}
// pulls the scores from local storage and displays them by running through the array
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
// buttons for clear and back
clearB.addEventListener('click', clearScores)
backB.addEventListener('click', loseGame);