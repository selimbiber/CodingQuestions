function solution(inputString) {
  const numGroups = inputString.split(".");
  if (numGroups.length !== 4) return false;

  for (const num of numGroups) {
    if (num.startsWith("0") && num.length > 1) {
      return false;
    }
    if (!num || isNaN(num) || num < 0 || num > 255) {
      return false;
    }
  }
  return true;
}
