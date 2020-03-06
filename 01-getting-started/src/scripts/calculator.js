// From DwanW https://github.com/DwanW/cohort4/blob/master/01-getting-started/src/scripts/functions.js

const calculatorFunctions = {

add: (num1, num2) => {
    return num1 + num2;
},

subtract: (num1, num2) => {
    return num1 - num2;
},

multiply: (num1, num2) => {
    return num1*num2;
},

divide: (num1, num2) => {
    return num1/num2;
},

calculate: (num1, num2, method)=> {
    switch(method){
        case 'add':
            return calculatorFunctions.add(num1, num2);
        case 'subtract':
            return calculatorFunctions.subtract(num1, num2);
        case 'multiply':
            return calculatorFunctions.multiply(num1, num2);
        case 'divide':
            return calculatorFunctions.divide(num1,num2);
    }
},

}

export default calculatorFunctions;