var five = require('johnny-five');
var board = new five.Board();

var buttonCounter = 0;
var buttonsSequence = [];
var leds = [];
var timeoutIds = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomNumber() {
  return getRandomInt(0, 1);
}

function startGame() {
  buttonCounter = 0;
  buttonsSequence = [];

  // starts with 3 choices
  buttonsSequence.push(generateRandomNumber());
  buttonsSequence.push(generateRandomNumber());
  buttonsSequence.push(generateRandomNumber());

  blinkLedsInSequence();
}

function blinkLedsInSequence() {
  var sequenceLength = buttonsSequence.length;
  var currentButtonSequenceCounter = 0;

  timeoutIds.push(
    setTimeout(function() {
      currentButtonSequenceCounter = buttonsSequence[buttonCounter];
      // This console shows you the current sequence in the memory game
      buttonCounter++;
      if(buttonCounter < sequenceLength) {
        // turning turn led
        blinkLedsInSequence();
      } else {
        // This console shows you the current sequence in the memory game
        console.log('START: ', buttonsSequence);
        buttonCounter = 0;
      }

      // turning off led
      timeoutIds.push(
        setTimeout(function() {
          leds[currentButtonSequenceCounter].off();
        }, 100));

    }, 200));
};


board.on('ready', function() {

  var piezoSongs = ['C4', 'E4'];

  leds = new five.Leds([7, 13]);
  var buttons = new five.Buttons([2, 4]);
  var piezo = new five.Piezo(8);

  buttons.on('press', function(button) {
    var index = buttons.indexOf(button);
    leds[index].on();
    piezo.play({ song: piezoSongs[index] });
  });

  buttons.on('release', function(button) {
    var index = buttons.indexOf(button);

    leds[index].off();
    piezo.off();

    if(buttonsSequence[buttonCounter] === index) {
      buttonCounter++;
      if(buttonCounter === buttonsSequence.length) {
        console.log('>>> You won!');
        buttonCounter = 0;
        buttonsSequence.push(generateRandomNumber());
        blinkLedsInSequence();
      }
    } else {
      timeoutIds.forEach(function(timeoutId) {
        clearTimeout(timeoutId);
      });
      console.log('>>> Error in sequence. try again!');
      startGame();
    }
  });

  // Starting the game
  startGame();

});
