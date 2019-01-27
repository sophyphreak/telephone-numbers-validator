const dashesMisplaced = (inputStr, numberOfDashes) => {
  if (numberOfDashes === 3) {
    return true;
  }
  if (numberOfDashes === 2) {
    if (twoDashesWrongPlaces(inputStr)) {
      return true;
    }
    if (hasParentheses(inputStr)) { // (123)-123-1234 not valid
      return true;
    }
  }
  if (numberOfDashes === 1) {
    if (!hasParentheses(inputStr)) { // you need parantheses with one dash
      return true;
    }
    if (oneDashWrongPlace(inputStr)) {
      return true;
    }
  }
  return false;
}

const twoDashesWrongPlaces = inputStr => !(/-\d{3}-\d{4}$/.test(inputStr));

const oneDashWrongPlace = inputStr => !(/-\d{4}$/.test(inputStr));

const hasParentheses = inputStr => /[()]/.test(inputStr);


module.exports = {
  dashesMisplaced,
  twoDashesWrongPlaces,
  oneDashWrongPlace,
  hasParentheses
}