function solution(n) {
  const digits = n.toString().split("");

  return digits.reduce((acc, cur) => acc + Number(cur), 0);
}
