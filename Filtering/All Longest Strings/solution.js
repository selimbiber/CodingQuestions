function solution(inputArray) {
  const longestStrLength = findLongestStrLen(inputArray);

  return inputArray.filter((input) => input.length === longestStrLength);
}

function findLongestStrLen(array) {
  let longestStrLen = "";

  for (const str of array) {
    if (str.length > longestStrLen) {
      longestStrLen = str.length;
    }
  }

  return longestStrLen;
}
