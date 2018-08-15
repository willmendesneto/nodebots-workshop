// Make button controls the LED and PIEZO
var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var leds = new five.Leds([12]);
  var buttons = new five.Buttons({
    pins: [13],
    // In case your buttons are responding to different events
    // they are probably receiving the eletricity in different points.
    // To solve that via code you can uncomment the option `invert`
    // invert: true
  });
  var piezo = new five.Piezo(11);

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
