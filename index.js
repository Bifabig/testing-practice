const capitalize = (string) => {
  const firstLetter = string.charAt(0).toUpperCase();
  const otherLetters = string.slice(1);
  const capitalized = `${firstLetter}${otherLetters}`;
  return capitalized;
};

module.exports = capitalize;
