  const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
          if (input.value === '' && index > 0) {
            inputs[index - 1].focus();
          }
        } else if (e.key >= 0 && e.key <= 9 && input.value !== '' && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
    });

    // Autofocus first input on load
    window.addEventListener('DOMContentLoaded', () => {
      inputs[0].focus();
    });