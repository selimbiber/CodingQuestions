function insertionSort(array) {
  const nums = array.slice();
  let shift = true;

  do {
    shift = false;

    for (let i = 1; i < nums.length; i++) {
      const [currentNum, prevNum] = [nums[i], nums[i - 1]];

      if (currentNum < prevNum) {
        shift = true;
        [nums[i], nums[i - 1]] = [prevNum, currentNum];
      }
    }
  } while (shift);

  return nums;
}
