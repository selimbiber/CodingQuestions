function fiboEvenSum(n) {
  let a = 1; // first fib num
  let b = 2; // second fib num
  let sum = 0; // init sum val

  while (a <= n) {
    if (a % 2 === 0) {
      sum += a;
    }

    // generate the next fib num
    const next = a + b;
    a = b;
    b = next;
  }

  return sum;
}
