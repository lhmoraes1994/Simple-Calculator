function input(value) {
  var sound = document.getElementById("sound");
  sound.src = "sounds/beep.mp3";
  sound.play();


  if (value == 'c') {

    clear();
  }
  else {
    if (value == 'b') {

      backspace();
    }
    else {
      if (value == '=') {
        equal();


      }
      else {
        var currentValue = document.getElementById("currentValue").innerText;
        if (currentValue.length < 10) {
          var currentValue = document.getElementById("currentValue").innerText;
          if (currentValue.length > 0) {
            if (!isNaN(value)) {
              document.getElementById("currentValue").innerText += value;
            } else {

              if (!isNaN(currentValue[currentValue.length - 1])) {

                document.getElementById("currentValue").innerText += value;
              }
              else {
                var lastindex = document.getElementById("currentValue").innerText.length - 1;
                currentValue = currentValue.substring(0, lastindex) + value;
                document.getElementById("currentValue").innerText = currentValue;

              }

            }



          } else {

            if (!isNaN(value)) {
              document.getElementById("currentValue").innerText += value;
            }




          }



        }
      }
    }
  }




}


function calculate(expresion) {

  if (!isNaN(expresion[expresion.length - 1])) {
    var result = eval(expresion);
    if (result > 999999999) {
      result = "Error";
    }
    return result;

  }


}


function equal() {
  let expresion = document.getElementById("currentValue").innerText;


  if (!isNaN(expresion[expresion.length - 1])) {
    let result = calculate(expresion).toString();

    if (result.length > 10) {
      document.getElementById("currentValue").innerText = result.substring(0, 9);
      document.getElementById("previousValue").innerText = expresion;
    } else {
      document.getElementById("currentValue").innerText = result;
      document.getElementById("previousValue").innerText = expresion;

    }
  }

}


function clear() {

  document.getElementById("currentValue").innerText = "";
  document.getElementById("previousValue").innerText = "";
}
function backspace() {
  let currentValue = document.getElementById("currentValue").innerText;
  if (currentValue.length > 0) {

    currentValue = currentValue.substring(0, currentValue.length - 1);
    document.getElementById("currentValue").innerText = currentValue;
  }
  else {
    previousValue.innerText = "";
  }





}