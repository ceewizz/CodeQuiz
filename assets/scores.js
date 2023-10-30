function printHighScores() {
    // Get the high scores from the local storage if any or set to an empty array if none
    var HighScores = JSON.parse(localStorage.getItem("HighScores")) || [];

    // Listing the high scores from highest to lowers
    HighScores.sort(function (a, b) {
        return b.score - a.score;
    });

    HighScores.foreach(function (score, i) {
        // Now creating li tag for each high score
        var liEl = document.createElement("li");
        liEl.textContent = i + 1 + ". " + score.initials + " - " + score.score;

        // showing it on the page
        var olEl = document.getElementById("HighScores");
        olEl.appendChild(liEl);
});
}