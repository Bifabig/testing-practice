//Arrange
const capitalize = require('./index');
//Act
test('string capitalized is Biftu', () => {
  //Assert
  expect(capitalize('biftu')).toBe('Biftu');
});
