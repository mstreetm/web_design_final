// The time between letters
const timerLength = 100;

// finds the element containing the text, sets that text to another variable, then an array, then clears the text in the element.
var scrollTextElem = document.getElementById("scroll-text");
var scrollText = scrollTextElem.innerHTML;
scrollTextElem.innerHTML = "";
var scrollTextArray = scrollText.split("");

//every timerLength ms, add another character to the text, stop the timer when all the text has been added
var timer = setInterval(function(){
  if(scrollTextArray.length > 0){
    scrollTextElem.innerHTML += scrollTextArray.shift();
  }else{
    clearInterval(timer);
  }
}, timerLength);
