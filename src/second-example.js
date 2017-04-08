// Make button controls the LED
var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var leds = new five.Leds([13]);
  var buttons = new five.Buttons([2]);

  buttons.on('press', function(button) {
    var index = buttons.indexOf(button);
    leds[index].on();
  });

  buttons.on('release', function(button) {
    var index = buttons.indexOf(button);
    leds[index].off();
  });
});
