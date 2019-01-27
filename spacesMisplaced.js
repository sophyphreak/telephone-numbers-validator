const spacesMisplaced = (inputStr, numberOfSpaces) => {
  if (numberOfSpaces > 3) {
    return true;
  }
  if (numberOfSpaces === 3) {
    if (threeSpacesWrongPlaces(inputStr)) {
      return true;
    }
  }
  if (numberOfSpaces === 2) {
    if (twoSpacesWrongPlaces(inputStr)) {
      return true;
    }
  }
  if (numberOfSpaces === 1) {
    if (oneSpaceWrongPlace(inputStr)) {
      return true;
    }
  }
  return false;
}

const threeSpacesWrongPlaces = inputStr => !(/^1 \(?\d{3}\)? \d{3} \d{4}$/.test(inputStr));

const twoSpacesWrongPlaces = inputStr => !(
  /^1 \(?\d{3}\)? \d{3}-\d{4}$/.test(inputStr) || /^\(?\d{3}\)? \d{3} \d{4}$/.test(inputStr)
);

const oneSpaceWrongPlace = inputStr => !(
  /^1 \d{3}-\d{3}-\d{4}$/.test(inputStr) || /^\(\d{3}\) \d{3}-?\d{4}$/.test(inputStr)
  );

module.exports = {
  spacesMisplaced,
  threeSpacesWrongPlaces,
  twoSpacesWrongPlaces,
  oneSpaceWrongPlace
}