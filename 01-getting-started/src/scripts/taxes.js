    const taxCalc = {
    
    //tax calculation function
    calculateTax: (num) => {
        return (num > 214368)? `$ ${((num - 214368) * 0.33 + 49644.31).toFixed(2)}` :
        (num > 150473)? `$ ${((num - 150473) * 0.29 + 31114.76).toFixed(2)}` :
        (num > 97069)? `$ ${((num - 97069) * 0.26 + 17229.72).toFixed(2)}` :
        (num > 48535)? `$ ${((num - 48535) * 0.205 + 7280.25).toFixed(2)}` :
        `$ ${(num * 0.15).toFixed(2)}`;
    },

}

export default taxCalc;