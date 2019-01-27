const parenthesesMisplaced = (inputStr, numberOfDigits) => {
  let parenthesesSubstring = '';
  if (numberOfDigits === 11) {
    if (spaceAfterFirstNumber(inputStr)) {
      parenthesesSubstring = inputStr.slice(2,7);
    } else {
      parenthesesSubstring = inputStr.slice(1,6);
    }
    if (notParenthesesAndThreeNumbers(parenthesesSubstring)) {
      return true;
    }
  } else {
    parenthesesSubstring = inputStr.slice(0,5);
    if (notParenthesesAndThreeNumbers(parenthesesSubstring)) {
      return true;
    }
  }
  return false;
};

const spaceAfterFirstNumber = inputStr => inputStr[1] === ' ';

const notParenthesesAndThreeNumbers = parenthesesSubstring => !(/\(\d{3}\)/.test(parenthesesSubstring))

module.exports = {
  parenthesesMisplaced,
  spaceAfterFirstNumber,
  notParenthesesAndThreeNumbers
}