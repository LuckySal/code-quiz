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

var answersEl = doc.getElementById("answers");

// DOM Form input
var formInitials = document.getElementById("initials");

// Initialize the page
function init() {
    timeLeft = time;
    timerEl.textContent = timeLeft;
    questionsEl.setAttribute("style", "display: none");
    resultsEl.setAttribute("style", "display: none");
    feedbackEl.setAttribute("style", "display: none");

    questions = JSON.parse(JSON.stringify(quizQuestions));
}

// Durstenfeld shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/// FUNCTION TO START THE QUIZ
function startQuiz() {
    // hide start screen

    // un-hide questions section

    // start timer

    // show starting time

    getQuestion();
}

/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() {
    // get current question object from array
    currentQuestion = quizQuestions.pop();
    // update title with current question
    // clear out any old question choices
    // loop over choices
    // FOR {
    // create new button for each choice
    // display on the page
    // }
}

/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {
    // if the clicked element is not a choice button, do nothing.
    if (event.target) {
    }

    if (something) {
        // check if user guessed wrong
        // penalize time
        // display new time on page
        // give them feedback, letting them know it's wrong
    } else {
        // give them feedback, letting them know it's right
    }

    // flash right/wrong feedback on page for a short period of time

    // move to next question

    // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd(isWon) {
    // stop timer
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
        score: time
    }
    // save to localstorage
    // redirect to next page
}

/// CLICK EVENTS ///
// user clicks button to submit initials
btnSubmit.addEventListener("click", saveHighscore)
// user clicks button to start quiz
btnStart.addEventListener("click", startQuiz)
// user clicks on element containing choices


init();