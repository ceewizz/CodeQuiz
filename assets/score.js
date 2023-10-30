function printHighScores() {
    // Get the high scores from the local storage if any or set to an empty array if none
    var highScores = JSON.parse(localStorage.getItem("HighScores")) || [];

    // Listing the high scores from highest to lowers
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

    HighScores.forEach(function(score) {
        // create li tag for each high score
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        // showing it on the page
        var olEl = document.getElementById("highScores");
        olEl.appendChild(liEl);
});
}

