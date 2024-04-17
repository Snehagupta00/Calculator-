
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');


let currentInput = '';


buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    
    const buttonText = event.target.textContent;

    
    switch (buttonText) {
      case 'AC':
      
        currentInput = '';
        inputBox.value = currentInput;
        break;

      case 'DEL':
      
        currentInput = currentInput.slice(0, -1);
        inputBox.value = currentInput;
        break;

      case '+/-':
       
        currentInput = -currentInput;
        inputBox.value = currentInput;
        break;

      case '=':
        
        try {
          
          const result = eval(currentInput);
          inputBox.value = result;
          currentInput = result;
        } catch (error) {
          inputBox.value = 'Error (Press AC)';
          currentInput = '';
        }
        break;

      default:
        currentInput += buttonText;
        inputBox.value = currentInput;
        break;
    }
  });
});