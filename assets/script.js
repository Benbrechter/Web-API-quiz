var startBtn = document.querySelector("#start-button");
var btn1 = document.querySelector('#question1');
var btn2 = document.querySelector('#question2');
var btn3 = document.querySelector('#question3');
var btn4 = document.querySelector('#question4');
var questions = document.querySelector('#reload');
var answerDisplay = document.querySelector('#TorFdisplay')
var style = 'none'
var timeEl = document.querySelector('#time')
var btnAll = document.querySelectorAll('.Q')
var secondsLeft = 75

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


startBtn.addEventListener("click", function(){
//I guess this logic makes sense now that I look at it 
if(style === 'none' ){
    style = 'flex';

}else if (style === 'flex' ){ 
    btn1.setAttribute('style', 'display: flex;');
    btn2.setAttribute('style', 'display: flex;');
    btn3.setAttribute('style', 'display: flex;');
    btn4.setAttribute('style', 'display: flex;');


    startBtn.setAttribute('style', 'display: none;');

   questions.textContent = 'What is the correct syntax for Math.floor?';
   btn1.textContent= 'Math.floor(5.95)'
   btn2.textContent= 'mathFloor= 5.95'
   btn3.textContent= 'mathFloor= 5.95'
   btn4.textContent= 'MathFloor(5.95)'
  setTime();
}

});
//I tink this function is set up wrong or wherer it is put in is wrong
// it also be the event listener 
//I could also make it so it switches when every button is clicked
//then add the text saying if it is correct.
btnAll.addEventListener("click", function(){
    var correct = 'Math.floor(5.95)'
    if(correct === 'clicked'){
   quizResults.score.push(1);

   questions.textContent = 'What is Jquery';
   btn1.textContent= 'A Web API'
   btn2.textContent= 'A Third Party API'
   btn3.textContent= 'A Method'
   btn4.textContent= 'A Variable'
  }else {
  questions.textContent = 'What is Jquery';
   btn1.textContent= 'A Web API'
   btn2.textContent= 'A Third Party API'
   btn3.textContent= 'A Method'
   btn4.textContent= 'A Variable'
}
});


