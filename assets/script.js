var startBtn = document.querySelector("#answer-button");

startBtn.addEventListener("click", function(event){
var element = event.target;

var state = element.getAttribute('data-state');

if( state === "hidden"){
  element.textContent = element.getAttribute('data-string');
  element.setAttribute('data-state', 'visable');  
}else{
    element.textContent = '';
    element.setAttribute('data-state', 'hidden')
}
});