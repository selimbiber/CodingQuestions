function sameCase(a, b) {
  if (
    !((a >= "A" && a <= "Z") || (a >= "a" && a <= "z")) ||
    !((b >= "A" && b <= "Z") || (b >= "a" && b <= "z"))
  ) {
    return -1;
  }

  const isUpperCase = a === a.toUpperCase() && b === b.toUpperCase();
  const isLowerCase = a === a.toLowerCase() && b === b.toLowerCase();

  return isUpperCase ? 1 : isLowerCase ? 1 : 0;
}

/* NOTE Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

/* NOTE Results 

Time: 769ms
*/
