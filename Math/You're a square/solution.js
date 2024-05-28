const isSquare = function (n) {
  if (n < 0) return false;
  if (n === 0) return true;

  for (let i = 1; i <= n; i++) {
    let x = 0;
    if (n % i === 0) x = n / i;
    if (x * x === n) return true;
  }
  return false;
};

/* NOTE Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/
