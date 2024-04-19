let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  let result;
  try {
    result = eval(display.value);
  } catch (error) {
    result = 'Error';
  }
  display.value = result;
}
