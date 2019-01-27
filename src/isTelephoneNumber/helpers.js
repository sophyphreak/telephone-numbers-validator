const takeOutNonNumbers = inputStr => inputStr.replace(/[^0-9]/g, '');

const hasInvalidChars = inputStr => /[^0-9()-/ ]/.test(inputStr);

const firstNumberNot1 = onlyNumbers => onlyNumbers[0] !== '1';

const howManyDashes = inputStr => {
  const dashesArray = inputStr.match(/-/g);
  if (!dashesArray) return 0;
  return dashesArray.length;
}

const howManySpaces = inputStr => {
  const spacesArray = inputStr.match(/ /g);
  if (!spacesArray) return 0;
  return spacesArray.length;
}  

const howManyParentheses = inputStr => {
  const parenthesesArray = inputStr.match(/[()]/g);
  if (!parenthesesArray) return 0;
  return parenthesesArray.length;
}

module.exports = {
  takeOutNonNumbers,
  hasInvalidChars,
  firstNumberNot1,
  howManyDashes,
  howManySpaces,
  howManyParentheses
}