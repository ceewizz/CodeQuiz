
// Creating elements
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var feedbackEl = document.querySelector("#feedback");
var initialsEl = document.querySelector("#initials");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");


// Variables setting for quiz
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  
    // un-hide questions section
    questionsEl.removeAttribute("class");
  
    // start timer
    timerId = setInterval(clockTick, 1000);
  
    // show starting time
    timerEl.textContent = time;
  
    getQuestion();
  }
  
  function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
  
    // update title with current question
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    // Clear out / bypass any questions already answered
    choicesEl.innerHTML = "";

    // looping through the answers
    currentQuestion.choicesEl.Foreach(function (choice, i) {
        // Creating the choice buttons

        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", "choice");


        choiceNode.textContent = i + 1 + ". " + choice;


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
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;

        // Minus 15 seconds to show the feedback

        if (time < 0) {
            time = 0;
        }


        // Showing updated time on the page
        timerEl.textContent = time;
        feedbackEl.textContent = "Incorrect!";
        feedbackEl.style.color = "Red";
        feedbackEl.style.fontSize = "400%";
    } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "Green";
        feedbackEl.style.fontSize = "400%";
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
    questions.setAttribute("class", "hide");

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
   function saveHighscore() {
    // Getting the initials input
    var initials = initialsEl.value.trim();
     
    if (initials !== "") {
        // Geting the saved scores from local storage, if there are any and set an empty array for none
        var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

        // New object to store the score
        var newScore = {
            score: time,
            initials: initials
        };
        // Pushing the new score to local storage of user
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        // Showing the high score page
        window.location.href= "score.html";
    }
}
   
// Checking for the enter event
function checkforEnter(event) {
    // Checking if the key pressed is the enter key
    if (event.key === "Enter") {
        saveHighscore();
    }
}

// submit saves highscore  when clicked
submitBtn.onclick = saveHighscore;

// On click of the start to start the quiz
startBtn.onclick = startQuiz;


initialsEl.onkeyup = checkforEnter;
