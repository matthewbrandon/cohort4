const arrayFunctions = {
    
    //array block button functions
    addArrayInput: (item, arr) => {
        arr.push(item);
        return arr;
    },

    sumArrayInput: (arr) => {
        let total = 0;
        arr.forEach((e)=> total+=e)
        return total;
    },

    //dictionary block button functions
    lookUpKey: (property, object) => {
        if (object.hasOwnProperty(property)){
            return object[property];
        } else {
            return "no such key in the dictionary";
        }
    }
};

export default arrayFunctions;