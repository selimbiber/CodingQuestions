function twoOldestAges(ages) {
  const sortedArray = ages.sort((a, b) => b - a);
  return [sortedArray[1], sortedArray[0]];
}

/* NOTE Examples

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/
