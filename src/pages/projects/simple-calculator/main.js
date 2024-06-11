document.getElementById('buttons').addEventListener('click', function (event) {
  const clickedButton = event.target;
  console.log(clickedButton);

  if (clickedButton.tagName === 'BUTTON') {
    const buttonText = clickedButton.textContent;
    
    if (buttonText === 'C') {
      clearDisplay();
    } else if (buttonText === '=') {
      calculate();
    } else {
      appendToDisplay(buttonText);
    }
  }
});

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}