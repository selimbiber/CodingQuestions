function solution(a) {
  const n = a.length;

  if (n % 2 === 1) return a[Math.floor(n / 2)];
  return a[Math.floor(n / 2) - 1];
}
