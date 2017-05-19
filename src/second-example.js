// Make button controls the LED
var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var leds = new five.Leds([12]);
  var buttons = new five.Buttons({
    pins: [13],
    invert: true
  });

  buttons.on('press', function(button) {
    var index = buttons.indexOf(button);
    leds[index].on();
    console.log('presssed', leds[index].pin);
  });

  buttons.on('release', function(button) {
    var index = buttons.indexOf(button);
    leds.off();
    console.log('released');
  });
});
