const {
  takeOutNonNumbers,
  hasInvalidChars,
  firstNumberNot1,
  howManyDashes,
  howManySpaces,
  howManyParentheses
} = require('./helpers')

const { 
  parenthesesMisplaced
} = require('./parenthesesMisplaced');

const { dashesMisplaced } = require('./dashesMisplaced');

const { spacesMisplaced } = require('./spacesMisplaced');

const telephoneCheck = inputStr => {
  if (hasInvalidChars(inputStr)) {
    return false;
  }
  const onlyNumbers = takeOutNonNumbers(inputStr);
  const numberOfDigits = onlyNumbers.length
  if (numberOfDigits > 11 || numberOfDigits < 10) {
    return false;
  }
  if (numberOfDigits === 11) {
    if (firstNumberNot1(onlyNumbers)) {
      return false;
    }
  }
  const numberOfDashes = howManyDashes(inputStr);
  if (numberOfDashes > 0) {
    if (dashesMisplaced(inputStr, numberOfDashes)) {
      return false;
    }
  }
  const numberOfParentheses = howManyParentheses(inputStr);
  if (numberOfParentheses > 0) {
    if (numberOfParentheses !== 2) {
      return false;
    }
    if (parenthesesMisplaced(inputStr, numberOfDigits)) {
      return false;
    }
  }
  const numberOfSpaces = howManySpaces(inputStr);
  if (numberOfSpaces > 0) {
    if (spacesMisplaced(inputStr, numberOfSpaces)){
      return false;
    };
  }
  return true;
};

module.exports = {
  telephoneCheck
}