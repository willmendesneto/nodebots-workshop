// Blink a LED
var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  // Number of the pin connected on the board
  var pinNumbers = [12];

  // Starting the LED
  var leds = new five.Leds(pinNumbers);

  // And here is the magic! \o/
  leds.blink();
  // leds.on();

  // How make the LED blink every second?
  // Blink accepts a number as timer parameter
  // The number value is based on miliseconds
  // So that, 1000 miliseconds = 1 seconds

  // leds.blink(1000);
});
