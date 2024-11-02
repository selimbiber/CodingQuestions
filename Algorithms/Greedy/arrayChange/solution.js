function solution(inputArray) {
  let moves = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const increment = inputArray[i] - inputArray[i + 1] + 1;
      moves += increment;
      inputArray[i + 1] += increment;
    }
  }

  return moves;
}
