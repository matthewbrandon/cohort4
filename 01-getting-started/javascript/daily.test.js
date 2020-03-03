import dailyFunctions from "./daily";

test('Farenheit converter', () => {
    expect(dailyFunctions.convertToFarenheit(0)).toBe(32);
    expect(dailyFunctions.convertToFarenheit(100)).toBe(212);
});