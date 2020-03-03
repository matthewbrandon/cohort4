import domFunctions from "./domp1";

test('Farenheit converter', () => {
    expect(domFunctions.convertToFarenheit(0)).toBe(32);
    expect(domFunctions.convertToFarenheit(100)).toBe(212);
});