// Blink a LED
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Number of the pin connected on the board
  var pinNumbers = [13];

  // Starting the LED
  var led = new five.Leds(pinNumbers);

  // And here is the magic! \o/
  led.blink();
});
