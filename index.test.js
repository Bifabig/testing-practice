//Arrange
const { stringLength } = require('./index');
//Act
test('your string has a length of 10', () => {
  //Assert
  expect(stringLength('biftugirma')).toBe(10);
});

// Arrange
const { reverseString } = require('./index');
//Act
test('your reversed string is olleh', () => {
  //Assert
  expect(reverseString('hello')).toBe('olleh');
});
