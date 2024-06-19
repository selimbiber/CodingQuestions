const applyOperations = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }

  let moved = true;

  while (moved) {
    moved = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === 0 && nums[i + 1] > 0) {
        nums[i] = nums[i + 1];
        nums[i + 1] = 0;
        moved = true;
      }
    }
  }

  return nums;
};
