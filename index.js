const stringLength = (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;
  } else {
    return 'err';
  }
};

const reverseString = (string) => {
  const splitString = string.split('');
  const reversed = splitString.reverse();
  const joinedString = reversed.join('');
  return joinedString;
};

module.exports = { stringLength, reverseString };
