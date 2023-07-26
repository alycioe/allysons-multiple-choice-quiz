var startButtonElement = document.getElementById('start-quiz');
var nextElement = document.getElementById('next-question');
var startContainer = document.querySelector(".start-container");
var quizContainer= document.querySelector(".quiz");
var questionElement = document.getElementById('question');
var btnGrid = document.querySelector(".start-quiz");
var highscoreSavedElement = document.querySelector(".userInitials");
var highscoreListElement = document.getElementById("leaderboard");

var scoreElement = document.getElementById('score');
var timerElement = document.getElementById('timer');
var time = 80;
let secondsRemaining;
let score = 0;
var index=0;
let highscoreList

var questions= [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
            "alerts",
            "strings",
            "booleans",
            "numbers",
        ],
        correct: "alerts"
    },

    {
        question: "The condition in an if/else statement is enclosed with _____.",
        answers: [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets",
        ],
        correct: "parenthesis"
    },



    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        correct:"all of the above"
    },

    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis",
        ],
        correct:"quotes"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "console.log",
            "JavaScript",
            "terminal/bash",
            "for loops",
        ],
        correct:"console.log"
    },
];





function startQuiz() {
    if(index=== questions.length){
        endQuiz()
    }
    timeLeft()
   startContainer.classList.add('hide');
   quizContainer.classList.replace("hide", "show")
   btnGrid.innerHTML=" "
 
   questionElement.textContent= questions[index].question

   if (questions[index].question > questions[index]) {

   }

   for(let i=0; i<questions[index].answers.length; i++){
    var btn = document.createElement("button")
    btn.setAttribute("value", questions[index].answers)
    btn.setAttribute("class", "buttons")
    btn.textContent=questions[index].answers[i]
    btnGrid.append(btn)
   }


};

function answerQuestions(answers) {
   if(answers==questions.correct){
    index++
    score++
    startQuiz();
   } else {
    index++
    time-=5
    startQuiz();
   }
   scoreElement.textContent = `Score: ${score} points`;
};

function timeLeft() {
    secondsRemaining=setInterval(function(){
        time--
        timerElement.innerHTML=`Time Left: ${time}`
        if(time===0){
            endQuiz()
        }
    },1000)
   
};

function endQuiz(){
    clearInterval(secondsRemaining);
    quizContainer.style.display="none";
    viewHighscoreList();
}


// This will be used to store initials and score of initials
// localStorage will be used here to give and receive the score history

function saveHighscore() {
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("initials", JSON.stringify(initials));
}

function viewHighscoreList() {
    var highscores = localStorage.getItem("score");
    var userInitials = localStorage.getItem("initials");
    
    highscores = JSON.parse(highscores);
    userInitials = JSON.parse(userInitials);

    highscoreListElement.innerHTML = userInitials + " " + highscores;
};

highscoreListElement.addEventListener('click', viewHighscoreList);

btnGrid.addEventListener("click",()=>{
    var userChoice=this.event.target.value
    answerQuestions(userChoice)
})

startButtonElement.addEventListener('click', startQuiz);