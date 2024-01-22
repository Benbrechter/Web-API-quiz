const startBtn = document.querySelector("#start-button");
const questionContainerEl =  document.querySelector("#answer-grid");
const answerBtn = document.querySelectorAll('#answer-button')
const questionsElement = document.querySelector('#reload');
//this var is for the paragraph that will ask the question
const answerDisplay = document.querySelector('#TorFdisplay')
//this wil display if you clkicked the correct answer
var timeEl = document.querySelector('#time');

var secondsLeft = 75;

let shuffeledQuestions, currentQuestionIndex

startBtn.addEventListener("click", startGame)

// quiz results is going to be used when I store in Local Storage
var quizResults = {
    score: [],
    initials:'',
}


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = 'Timer: ' + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }


function startGame(){
    questionContainerEl.classList.remove('hide');
    startBtn.classList.add('hide');
shuffeledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
  setNextQuestion()
  setTime();
}



function setNextQuestion(){
showQuestion(shuffeledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionsElement.innerText = question.question
    questions.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('Q');
            if (answer.correct) {
                answerDisplay.textContent('Correct');
            } else {
                answerDisplay.textContent("Wrong");
            }
            button.addEventListener('click', selectAnswer);
            questionContainerEl.appendChild(button);
        });

}

const questions = [
    {
        question: 'What is the correct syntax for Math.floor?',
        answers: [
            {text: 'Math.floor(5.95)', correct: true},
            {text: 'mathFloor(5.95)', correct: false},
            {text: 'mathfloor(5.95)', correct: false},
            {text: 'MATH.FLOOR(5.95)', correct: false},
        ]
    }
]
