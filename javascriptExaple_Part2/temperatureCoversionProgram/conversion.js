//temperature conversion program

//declare all variable and const needed
let textBox = document.getElementById('textBox');
let toFahrenheit = document.getElementById('toFahrenheit');
let toCelsius = document.getElementById('toCelsius');
let resultSubmit = document.getElementById('resultSubmit');
let temp;

function convertTo() {
  if (toFahrenheit.Checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    resultSubmit.textContent = temp.toFixed(1) + '°F';
  } else if (toCelsius.Checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    resultSubmit.textContent = temp.toFixed(1) + '°C';
  } else {
    resultSubmit.textContent = 'Select a unit';
  }
}
