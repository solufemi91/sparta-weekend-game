$(function(event) {

var $startButton = $('#startButton');
var boxes = document.getElementsByClassName('boxes');
var $boxes = $('.boxes');
var $redBox = $('#red');
var $blueBox = $('#blue');
var $greenBox = $('#green');
var $yellowBox = $('#yellow');
var fourColours = ['red','blue','green','yellow'];
var playersChoice = [];
var computersChoice = [];
var randomBox = 0;
var randomColor = 0;
var counter = 0;
var id = 0;
var indexCounter = -1;
var clickCounter = 0
var $displayMessage = $('.displayMessage');

/// player making their choice about what to pick
$boxes.click(function(){
  var boxIClicked = $(this).attr('id');
  $(this).css('backgroundColor',boxIClicked);
  playersChoice.push(boxIClicked);
  indexCounter++
  clickCounter++
  compareArrays();
  console.log(playersChoice);
})

//random colors being genrated each time.

$startButton.click(function(){

  resetter();
  var id = setInterval(frame,500);
  function frame(){
    if(randomColor != 0){
      randomBox.style.backgroundColor = 'white';
      randomColor = 0;
      counter++;
      checkCounter();

    } else {
    randomBox = boxes[Math.floor(Math.random() * 4)];
    randomColor = randomBox.getAttribute('id');
    computersChoice.push(randomColor);
    console.log(computersChoice);
    randomBox.style.backgroundColor = randomColor;
    /// wait a few milli seconds and then change it to white

  }
  function checkCounter(){
    if(counter == 4){
      clearInterval(id);
      counter = 0;
    }
  }

  }

})

function compareArrays(){

  if(computersChoice[indexCounter] === playersChoice[indexCounter]){
  // console.log('correct');
  $displayMessage.html('Correct ' + clickCounter + ' choice');
  } else {
  console.log('incorrect');
  $displayMessage.html('Incorrect ' + clickCounter + ' choice');
  }
}

function resetter(){
  $displayMessage.html('correct/incorrect');
  indexCounter = -1;
  playersChoice = [];
  computersChoice = [];
  $('.boxes').css('backgroundColor','white');
  clickCounter = 0;

}



});
