function solution(inputArray) {
  const diffs = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    diffs.push(Math.abs(inputArray[i] - inputArray[i + 1]));
  }

  return Math.max(...diffs);
}
