function solution(n, firstNumber) {
  const distance = n / 2;

  return (firstNumber + distance) % n;
}
