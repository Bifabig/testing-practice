//Arrange
const Calculator = require('./index');
const calc = new Calculator(4, 2);
//Act
describe('Calculator', () => {
  test('sum of 4 and 2 is 6', () => {
    //Assert
    expect(calc.add()).toBe(6);
  });
  test('subtract 2 from 4 result is 2', () => {
    //Assert
    expect(calc.subtract()).toBe(2);
  });
  test('Divide of 4 by 2 result is 2', () => {
    //Assert
    expect(calc.divide()).toBe(2);
  });
  test('Multiply of 4 by 2 result is 8', () => {
    //Assert
    expect(calc.multiply()).toBe(8);
  });
});
