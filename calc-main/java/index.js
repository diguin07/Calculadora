let currentExpression = '';

function appendToDisplay(value) {
  currentExpression += value;
  document.getElementById('display').value = currentExpression;
}

function calculate() {
  try {
    const result = eval(currentExpression);
    document.getElementById('display').value = result;
    currentExpression = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  currentExpression = '';
  document.getElementById('display').value = '';
}