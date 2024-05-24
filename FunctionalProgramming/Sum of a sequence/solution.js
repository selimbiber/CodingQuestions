const sequenceSum = (begin, end, step) => {
  let result = 0;

  for (let i = begin; i <= end; i += step) {
    if (i > end) break;
    result += i;
  }

  return result;
};

/* NOTE Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/
