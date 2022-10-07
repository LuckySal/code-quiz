// Variables to keep track of quiz state
var currentQuestion;
const time = 100;
var timeLeft;
var timerId;
var questions;
// DOM Elements
var titleEl = document.getElementById("title");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("results");
var feedbackEl = document.getElementById("feedback");
var timerEl = document.getElementById("timer");

// DOM Buttons
var btnStart = document.getElementById("start-quiz");
var btnSubmit = document.getElementById("submit");

var answersEl = document.getElementById("answers");

// DOM Form input
var formInitials = document.getElementById("initials");

// Durstenfeld shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the page
function init() {
    timeLeft = time;
    timerEl.textContent = timeLeft;
    questionsEl.style.display = "none";
    resultsEl.style.display = "none";
    feedbackEl.style.display = "none";

    questions = JSON.parse(JSON.stringify(quizQuestions));
    shuffleArray(questions);
}

/// FUNCTION TO START THE QUIZ
function startQuiz() {
    // hide start screen
    titleEl.style.display = "none";
    // un-hide questions section
    questionsEl.style.display = "block";
    // start timer
    timerId = setInterval(clockTick, 1000);
    // show starting time

    getQuestion();
}

/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() {
    // get current question object from array
    currentQuestion = questions.pop().question;
    if (!currentQuestion) {
        quizEnd();
        return;
    }
    // update title with current question
    titleEl.value = currentQuestion.question;
    // clear out any old question choices
    answersEl.innerHTML = "";
    // loop over choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        // create new button for each choice
        var item = document.createElement("li");
        item.value = currentQuestion.choices[i];
        // display on the page
        answersEl.appendChild(item);
    }
}

/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {
    // if the clicked element is not a choice button, do nothing.
    if (event.target.tagName !== "LI") {
        return;
    }
    var isCorrect;
    if (event.target.value === currentQuestion.answer) {
        isCorrect = true;
    } else {
        isCorrect = false;
        // penalize time
        timeLeft -= 10;    
    }

    // TODO: flash right/wrong feedback on page for a short period of time

    getQuestion();
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
    // stop timer
    clearInterval(timerId);
    // show end screen
    // show final score
    // hide questions section
}

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
    // update time
    // check if user ran out of time
}

function saveHighscore() {
    // get value of input box - for initials
    var initials = formInitials.value;
    // make sure value wasn't empty
    if (!initials || initials === "") {
        alert("Initials cannot be empty. Please try again.");
        return;
    }
    // get saved scores from localstorage, or if not any, set to empty array
    var scores = JSON.parse(localStorage.getItem("highScores"));
    if (!scores) scores = [];
    // format new score object for current user
    var newScore = {
        score: time,
    };
    // save to localstorage
    // redirect to next page
}

/// CLICK EVENTS ///
// user clicks button to submit initials
btnSubmit.addEventListener("click", saveHighscore);
// user clicks button to start quiz
btnStart.addEventListener("click", startQuiz);
// user clicks on element containing choices

init();
