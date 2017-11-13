var five = require('johnny-five');
var board = five.Board();

board.on('ready', function() {
  var led = five.Led(12);
  var pinButtons = [13];

  var piezo = five.Piezo(11);

  var buttons = new five.Buttons({
    pins: pinButtons
  });
  buttons.on('press', function(button){
    console.log('That is my button PIN', button.pin);
    led.on();
    piezo.play({
      song: 'D4'
    });
  });
  buttons.on('release', function(button) {
    console.log('Released button PIN', button.pin);
    led.off();
    piezo.off();
  });
});
