import functions from './functions.js';
import calculatorFunctions from './calculator.js';
import taxCalc from './taxes.js';
import arrayFunctions from './arrays.js';

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

/* My Tax Calculator eventListeners */
document.getElementById("income").addEventListener("change",
    (() => {
        document.getElementById("tax").textContent = taxCalc.calculateTax(
            Number(income.value)
        );
    })
);

document.getElementById("income").addEventListener("click",
    (() => {
        document.getElementById("tax").textContent = taxCalc.calculateTax(
            Number(income.value)
        );
    })
);

/* Array block eventListeners */
var arrayValue;
var initialArrayState = [];
arrayValue = initialArrayState;

document.getElementById("arrayAdd").addEventListener("click",
    (() => {
        if (isNaN(arrayInput.value) === false && arrayInput.value !== '' ){
            console.log(typeof arrayInput.value);
            arrayFunctions.addArrayInput(Number(arrayInput.value), arrayValue);
            return document.getElementById("arrayMsg").textContent = `${arrayInput.value} has been added to the array`;
        } else {
            return document.getElementById("arrayMsg").textContent = `${arrayInput.value} is not a valid number`;
        }
    })
);

document.getElementById("arrayShow").addEventListener("click",
    (() => {
        return document.getElementById("arrayMsg").textContent = `[${arrayValue}]`;
    })
);

document.getElementById("arrayTotal").addEventListener("click",
    (() => {
        return document.getElementById("arrayMsg").textContent = `${arrayFunctions.sumArrayInput(arrayValue)} is the sum of all array elements`;
    })
);

document.getElementById("arrayClear").addEventListener("click",
    (() => {
        arrayValue = [];
        console.log(initialArrayState);
        return document.getElementById("arrayMsg").textContent = "array has been cleared";
    })
);

/* Dictionary block eventListeners */
const obj = {
    "ON": "Ontario",
    "QC": "Quebec",
    "NS": "Nova Scotia",
    "NB": "New Brunswick",
    "MB": "Manitoba",
    "BC": "British Columbia",
    "PE": "Prince Edward Island",
    "SK": "Saskatchewan",
    "AB": "Alberta",
    "NL": "Newfoundland and Labrador"
}

document.getElementById("lookUp").addEventListener("click",
    (() => {
        return document.getElementById("objMsg").textContent = arrayFunctions.lookUpKey((objInput.value).toUpperCase(), obj);
    })
);