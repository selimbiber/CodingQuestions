function solution(deposit, rate, threshold) {
  let years = 0;
  let balance = deposit;

  const annualRate = 1 + rate / 100;

  while (balance < threshold) {
    balance *= annualRate;
    years++;
  }

  return years;
}
