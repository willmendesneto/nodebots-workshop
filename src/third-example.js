// Make button controls the LED and PIEZO
var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var leds = new five.Leds([13]);
  var buttons = new five.Buttons([2]);
  var piezo = new five.Piezo(10);

  buttons.on('press', function(button) {
    var index = buttons.indexOf(button);
    leds[index].on();
    piezo.play({ song: 'C4' });
  });

  buttons.on('release', function(button) {
    var index = buttons.indexOf(button);
    leds[index].off();
    piezo.off();
  });
});
