// Variables to keep track of quiz state
var currentQuestion;
const time = 100;
var timeLeft;
var timerId;
// DOM Elements
var titleEl = document.getElementById("title");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("results");
var feedbackEl = document.getElementById("feedback");
var timerEl = document.getElementById("timer");

// DOM Buttons
var btnStart = document.getElementById("start-quiz");
var btnSubmit = document.getElementById("submit");

// DOM Form input
var formInitials = document.getElementById("initials");

function init() {
    timeLeft = time;
    timerEl.textContent = timeLeft;
    questionsEl.setAttribute("display", "none");
    resultsEl.setAttribute("display", "none");
    feedbackEl.setAttribute("display", "none");
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
    if (something) {
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

// user clicks on element containing choices


init();