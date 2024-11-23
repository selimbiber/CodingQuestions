function solution(value1, weight1, value2, weight2, maxW) {
  let totalMaxVal = 0;

  if (weight1 <= maxW) {
    totalMaxVal = value1;
  }

  if (weight2 <= maxW) {
    totalMaxVal = Math.max(totalMaxVal, value2);
  }

  if (weight1 + weight2 <= maxW) {
    totalMaxVal = Math.max(totalMaxVal, value1 + value2);
  }

  return totalMaxVal;
}
