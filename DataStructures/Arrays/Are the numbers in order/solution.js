function inAscOrder(arr) {
  const sortedArray = [...arr].sort((a, b) => a - b);
  return JSON.stringify(arr) === JSON.stringify(sortedArray);
}

/* NOTE Examples

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
*/
