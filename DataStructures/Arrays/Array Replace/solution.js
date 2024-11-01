function solution(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((input) => {
    return input === elemToReplace ? substitutionElem : input;
  });
}
