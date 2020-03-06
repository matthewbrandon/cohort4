import functions from './functions.js';
import calculatorFunctions from './calculator.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

/* My Calculator eventListeners */

document.getElementById("calculate").addEventListener('click',
    (() => {
        document.getElementById("result").textContent = calculatorFunctions.calculate(
            Number(firstNumber.value),
            Number(secondNumber.value),
            method.value);
    })
);