
// Creating elements
var questionsEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var choicesEl = document.from(document.getElementsByClassName("choice-text"));
var feedbackEl = document.getElementById("feedback");
var initialsEl = document.getElementById("initials");
var startButton = document.getElementById("start-button");
var SubmitBtn = document.getElementById("submit-btn");


// Variables setting for quiz
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


// function to start the quiz
function startQuiz() {
// Displaying the question
var startTextEl = document.getElementById("start-text");
startTextEl.setAttribute("class", "hide");

// Showing the questions function
questionsEl.removeAttribute("class");

// Starting the timer
timerId = setInterval(clockTick, 1000); 

// Starting the clock
timerEl.textContent = time;

getQuestion();
}


// function to get the question
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    // Changing the title  with the current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.question;

    // Clear out / bypass any questions already answered
    choicesEl.innerHTML = "";

    // looping through the answers
    currentQuestion.choicesEl.forEach(function (choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", i);

        choiceNode.textContent = i + 1 + " . " + choice;

        // Adding event listeners to the choice buttons
        choiceNode.onclick = questionClick;
        // Showing the page
        choicesEl.appendChild(choiceNode);
    });
}


// function for answering the question
// checking the answer whether it's correct or not
function questionClick() {
    // If answer is incorrect, penalize the time
    if (this.value!== questions[currentQuestionIndex].answer) {
        timee -= 15;

        if (timee < 0) {
            timee = 0;
        }


        // Showing the time on the page
        timerEl.textContent = timee;
        feedbackEl.textContent = "Incorrect!";
        feedbackEl.style.color = "orange";
        feedbackEl.style.fontSize = "120%";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        feedbackEl.style.fontSize = "120%";
    }

    //  Flasing of the question for feedback
    feedbackEl.setAttribute("class", "feedback");

    // Setting the timfee
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
       }, 1000);

       // next question
       currentQuestionIndex++;

       // checking the time
       if (currentQuestionIndex === questions.length) {
        quizEnd();
       }
       else {
        getQuestion();

       }
    }
function quizEnd() {
    // timer end
    clearInterval(timerId);

    // Showing the end page
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class");

    // show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

    // hide the questions section
    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
    // changing updating time
    time--;
    timerEl.textContent = time;

    // Checking if the user is out of time
    if (time <= 0) {
        quizEnd();

    }
}
   // Function to save the high score
   function saveHighScore() {
    // Getting the initials input
    var initials = initialsEl.value.trim();
     
    if (initials!== "") {
        // Geting the saved scores from local storage, if there are any and set an empty array for none
        var highScores = JSON.parse(localStorage.getItem("HighScores")) || [];

        // New object to store the score
        var newScore = {
            score: time,
            initials: initials
        };
        // Pushing the new score to local storage of user
        highScores.push(newScore);
        window.localStorage.setItem("HighScores", JSON.stringify(HighScores));

        // Showing the high score page
        window.location.href= "score.html";
    }
}
   
// Checking for the enter event
function checkEnter(event) {
    // Checking if the key pressed is the enter key
    if (event.key === "Enter") {
        saveHighScore();
    }
}

// submit saves highscore  when clicked
SubmitBtn.onclick = saveHighScore;

// On click of the start to start the quiz
startButton.onclick = startQuiz;


initialsEl.onkeyup = checkForEnter;
