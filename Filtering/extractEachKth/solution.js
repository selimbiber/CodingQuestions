function solution(inputArray, k) {
  return inputArray.filter((_, index) => (index + 1) % k !== 0);
}
