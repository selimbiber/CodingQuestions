function selectionSort(array) {
  const nums = array.slice();
  const sortedNums = [];

  while (nums.length > 0) {
    let minNum = nums[0];
    let minIndex = 0;

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < minNum) {
        minNum = nums[i];
        minIndex = i;
      }
    }

    sortedNums.push(minNum);
    nums[minIndex] = nums[nums.length - 1];
    nums.pop();
  }
  return sortedNums;
}
