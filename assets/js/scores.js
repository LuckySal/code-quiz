var scoresListEl = document.getElementById("scores-list");
var clearButton = document.getElementById("clear-scores");

function printHighscores() {
    // Check for scores in local storage
    var scores = JSON.parse(localStorage.getItem("highScores"));
    if (scores) {
        scores.sort(Score.compare);
    } else {
        scores = [];
    }
    scoresListEl.innerHTML = "";
    // loop through scores
    scores.forEach((element) => {
        // create li tag for each high score
        var item = document.createElement("li");
        item.textContent = `${element.score} ${element.initials}`;
        // display on page
        scoresListEl.appendChild(item);
    });
}

/// FUNCTION TO CLEAR SCORES ///
function clearHighscores() {
    localStorage.removeItem("highScores");
    printHighscores();
}

/// CLICK EVENT TO RUN THE CLEAR SCORES FUNCTION ///

// run function when page loads
printHighscores();

clearButton.addEventListener("click", clearHighscores);
