function dontGiveMeFive(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    if (!i.toString().includes(5)) result.push(i);
  }

  return result.length;
}

/* NOTE Examples

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
*/
