const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convertTemp() {
    if(toFahrenheit.checked) {
        temp = textBox.value;
        result.textContent = `${temp}°C is ${temp * 9/5 + 32}°F`;
    } else if(toCelsius.checked) {
        temp = textBox.value;
        result.textContent = `${temp}°F is ${(temp - 32) * 5/9}°C`; 
       
    }else {
        result.textContent = 'Please select a conversion type';
    }
}