// Function to start the quiz
function startQuiz() {
    // To hide the start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // Showing the questions function
    questionsEl.removeAttribute("class");

    // Starting the timer
    timerId = setInterval(clockTick, 1000);

    // Starting the clock
    timerEl.textContent = time;

    getQuestion();
}
