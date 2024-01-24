const startBtn = document.querySelector("#start-button");
//this is calling to the start button in the HTML
const questionContainerEl =  document.querySelector("#answer-grid");
//this is calling to the answer grid in the Html that holds the answers
//we can create buttons for the answers and appending them
const questionsElement = document.querySelector('#reload');
//this var is for the paragraph that will ask the question
const answerDisplay = document.querySelector('#TorFdisplay')
//this wil display if you clicked the correct answer
var timeEl = document.querySelector('#time');
//timerEl = the paragraph tag in the HTML that will display the countdown
const endScreen = document.querySelector('#endScreen')
// endScreen = the div that will be displayed at the end of the game
const saveBtn = document.querySelector('#submitBtn')
//saverBtn = the save data button at the end of the game

var secondsLeft = 60;

let shuffeledQuestions;
let currentQuestionIndex = 0

startBtn.addEventListener("click", startGame)
//you have to add an event listener on the start button to assign it purpose

const questions = [
    {
        question: 'What is the correct syntax for Math.floor?',
        answers: [
            'Math.floor(5.95)',
            'mathFloor(5.95)',
            'mathfloor(5.95)',
            'MATH.FLOOR(5.95)',
        ], correct: 'Math.floor(5.95)'
    },
    {
        question: 'What is the correct syntax for Math.floor?',
        answers: [
            'Math.floor(5.95)',
            'mathFloor(5.95)',
            'mathfloor(5.95)',
            'MATH.FLOOR(5.95)',
        ], correct: 'Math.floor(5.95)'
    },
    {
        question: 'What is the correct syntax for Math.floor?',
        answers: [
            'Math.floor(5.95)',
            'mathFloor(5.95)',
            'mathfloor(5.95)',
            'MATH.FLOOR(5.95)',
        ], correct: 'Math.floor(5.95)'
    }
]
//questions = an object that I am using to hold all of my questioins and answer pairs

// quiz results is going to be used when I store in Local Storage

var timerInterval;

function setTime() {
     timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = 'Timer: ' + secondsLeft;
  
      if(secondsLeft <= 0) {
        secondsLeft = 0
        endQuizz();
        sendMessage();
      }
  
    }, 1000);
  }
//setTime = a count down display starting at 60 and finishing when the game is completed or unti time = 0

function startGame(){
    setTime();
    questionContainerEl.classList.remove('hide');
    startBtn.classList.add('hide');
shuffeledQuestions = shuffleQuestions(questions)
  showQuestion();
  
}
//startGame() = the timer starting and the questions and answers are appering
//this also creates the shuffleQuestions function so the questions can be at random

function showQuestion() {
    questionsElement.innerText = shuffeledQuestions[currentQuestionIndex].question
    questionContainerEl.innerHTML=''
    shuffeledQuestions[currentQuestionIndex].answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer;
            button.classList.add('Q');
            button.addEventListener('click', selectAnswer);
            questionContainerEl.appendChild(button);
        });

}
//showQuestion = 
//the <p> tag that holds the question gets a new shuffled queston. 
//since we enter a string in JS we should set the html to an empty string 
//then shuffleQuestions[this means what number of question you are on].answer.forEach  <- this means for each answer that goes with the question in the object
//it will create an answer button for the string in the questions object it also adds an event listener on each buttons finally we appended the buttons to the questions container

function selectAnswer(e){          
    if(e.target.innerText === shuffeledQuestions[currentQuestionIndex].correct){
        console.log('correct')
    }else{
        secondsLeft -= 5;
    }
    currentQuestionIndex++
    if(currentQuestionIndex === shuffeledQuestions.length){
        endQuizz();
    }else{
        showQuestion();
    }
}
//if the selected Answer inner text = the corrisponding correct answer in teh object we go through shuffledQuestions 
//This is where I would add to locaol storage and also a display 
//else -5 time also    if you run out of questions end quizz otherwise show more questions

function endQuizz(){
    clearInterval(timerInterval);
    questionContainerEl.classList.add('hide')
    questionsElement.textContent = 'Game Over!';
    endScreen.classList.remove('hide');
    saveBtn.onclick = save
}
function save(){
//this adds the initials and takes away the rest of the answers and questions
}

function shuffleQuestions(arr){
    for(let i = arr.length-1; i > 0; i--){
        let j = Math.floor(Math.random()* i + 1)
        let temp = arr[i]
        arr[i]= arr[j]
        arr[j]=temp 
    }return arr;
}//fisher yates algorithm


//if (answer.correct) {
  //  answerDisplay.textContent('Correct');
//} else {
 //   answerDisplay.textContent("Wrong");
//}