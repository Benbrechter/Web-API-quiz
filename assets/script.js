const startBtn = document.querySelector("#start-button");
//this is calling to the start button in the HTML
const questionContainerEl =  document.querySelector("#answer-grid");
//this is calling to the answer grid in the Html that holds the answers
//we can create buttons for the answers and appending them
const questionsElement = document.querySelector('#reload');
//this var is for the paragraph that will ask the question
const cdQuiz = document.querySelector('#quiz')
const answerDisplay = document.querySelector('#TorFdisplay')
//this wil display if you clicked the correct answer
var timeEl = document.querySelector('#time');
//timerEl = the paragraph tag in the HTML that will display the countdown
var scoreEl = document.querySelector('#score')
const endScreen = document.querySelector('#endScreen')
// endScreen = the div that will be displayed at the end of the game
const saveBtn = document.querySelector('#submitBtn')
//saverBtn = the save data button at the end of the game
let highScore = document.querySelector('#highscore')

highScore.textContent = 'Highscore: ' + localStorage.getItem('userData') + ' with ' + localStorage.getItem('score') + ' points';

var secondsLeft = 60;
var score = 0;

let shuffeledQuestions;
let currentQuestionIndex = 0

startBtn.addEventListener("click", startGame)
//you have to add an event listener on the start button to assign it purpose

const questions = [
    {
        question: 'What is the correct syntax for Math.floor?',
        answers: [
            '1. Math.floor(5.95)',
            '2. mathFloor(5.95)',
            '3. mathfloor(5.95)',
            '4. MATH.FLOOR(5.95)',
        ], correct: '1. Math.floor(5.95)'
    },
    {
        question: 'What is Jquery?',
        answers: [
            '1. web API',
            '2. Third Party API',
            '3. A method',
            '4. An undifined variable',
        ], correct: '2. Third Party API'
    },
    {
        question: 'What is a Dom?',
        answers: [
            '1. A persons name',
            '2. Document Over Module',
            "3. Don't Repeat Yourself",
            '4. Document Object Model',
        ], correct: '4. Document Object Model'
    },
    {
        question: 'How can you store an object in Local Storage?',
        answers: [
            '1. You can not',
            '2. by Local Storage.getItem',
            "3. By turing it into a string then storing it",
            '4. That is not the correct use for local storage',
        ], correct: '3. By turing it into a string then storing it'
    },
    {
        question: "If I just created a <p> element using JS why won't it show up?",
        answers: [
            '1. The <p> element did not get appended',
            '2. You can not make HTML elements in JS',
            "3. double check your spelling",
            '4. I am lost!',
        ], correct: '1. The <p> element did not get appended'
    },
    {
        question: "What is the benefit of using proper HTML semantics?",
        answers: [
            '1. Allow readers to understand your content better',
            '2. It helps the search engine to determine the importance of content on the web page',
            "3. It keeps the code easy to read and keep track of",
            '4. All of the above!',
        ], correct: '4. All of the above!'
    },
    {
        question: "How do you count data index inside an array?",
        answers: [
            '1. odd index',
            '2. even index',
            "3. 1, 2, 3, 4 index",
            '4. 0 index',
        ], correct: '4. 0 index'
    },
    {
        question: "Where in the HTML document do link the JavaScript page?",
        answers: [
            '1. Under the CSS.style link',
            '2. At the beginning of the body tag',
            "3. At the end before the body tag is closed",
            '4. It connects automatically',
        ], correct: '3. At the end before the body tag is closed'
    },
    {
        question: "What is the purpose of event.preventDefault()?",
        answers: [
            '1. It changes what the event calls to',
            '2. It stops the default actions the event has',
            "3. to help your code look fun",
            '4. I am lost!',
        ], correct: '2. It stops the default actions the event has'
    },
    {
        question: "How many data types can an array hold??",
        answers: [
            '1. Only strings',
            '2. Only numbers',
            "3. As many data types needed",
            '4. Only strings and booleans',
        ], correct: '3. As many data types needed'
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
    cdQuiz.classList.add('hide');
shuffeledQuestions = shuffleQuestions(questions)
  showQuestion();
  
}
//startGame() = the timer starting and the questions and answers are appering
//this also creates the shuffleQuestions function so the questions can be at random

function showQuestion() {
    questionsElement.classList.add('text')
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
        score += 5 ;
        scoreEl.textContent = 'Score: ' + score;

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


//maybe add a function that adds a delay on the answer and questions

function endQuizz(){
    clearInterval(timerInterval);
    questionContainerEl.classList.add('hide')
    questionsElement.textContent = 'Game Over!';
    answerDisplay.textContent = 'Your final score is ' + score;
    endScreen.classList.remove('hide');
}


function shuffleQuestions(arr){
    for(let i = arr.length-1; i > 0; i--){
        let j = Math.floor(Math.random()* i + 1)
        let temp = arr[i]
        arr[i]= arr[j]
        arr[j]=temp 
    }return arr;
}//fisher yates algorithm

saveBtn.addEventListener('click', function(event){
event.preventDefault;
var userData = document.querySelector('#inputIN').value;

if(userData === ''){
    displayMessage('error', 'Initials cannot be blank');  
}

window.localStorage.setItem('userData', userData);
window.localStorage.setItem('score', score);
playAgain();
})

const ynOption= document.querySelector('#YN')
let option1 = document.querySelector('#YB')
let option2 = document.querySelector('#NB')

function playAgain(){
    questionsElement.textContent = 'Do you want to play again?';
    endScreen.classList.add('hide');
    answerDisplay.classList.add('hide')
    ynOption.classList.remove('hide')
   
    option1.onclick = refreshPage
    

}

function refreshPage(){
    window.location.reload();
} 
