function twoSum(numbers, target) {
  const numMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[numbers[i]] = i;
  }
}

/* NOTE Examples

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
*/
