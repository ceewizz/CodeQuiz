
// Creating elements
var question = document.getElementById("question");
var choices = document.from(document.getElementsByClassName("choice-text"));
var progressText = document.getElementById("progressText");
var scoreText = document.getElementById("score");
var timerElement = document.getElementById("timer");
var startButton = document.getElementById("start-button");

var questionCounter = 0;
var score = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var timer;
var timerCount;
var questionsIndex = 0;
var isWin = false;

const quizContainer = document.getElementById("quiz-container");
const startQuizButton = document.getElementById("start-quiz");
const resultsContainer = document.getElementById("results-container");
var currentQuestionIndex = 0;


function startQuiz() {
// Displaying the question
var startText = document.getElementById("start-text");
startText.textContent = questions[questionsIndex].question;


function buildQuiz() {
}

function showReults() {
}

// Display the quiz
buildQuiz();

SubmitBtn.addEventListener('click', showReults);


const question = [
    {
        question:"who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b. "Brendan Eich",
            c: "Sheryl Sandberg"
        },
        correctAnswers: {"b"
    },
        {
            question: "What is HTML?",
            answers: {
                a: "Hyper Text Markup Language",
                b: "Highlighting Markup Language",
                c: "Hiting Markup Language",
            },
            correctAnswers: {"a"
        }
        https://www.sitepoint.com/simple-javascript-quiz/

        }