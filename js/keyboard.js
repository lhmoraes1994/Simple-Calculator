var operators = ['*', '/', ',', '+', '-', '=', 'Backspace'];
var pressed = document.getElementById('pressed');
function keyPressed(evt) {
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  return String.fromCharCode(key);
}

document.onkeypress = function (evt) {
  var str = keyPressed(evt);

  if (operators.indexOf(str) >= 0 || !isNaN(str) && str != '\r') {
    input(str);
  }

};