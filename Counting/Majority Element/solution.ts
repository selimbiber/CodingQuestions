const majorityElement = function (nums): number {
    let maj: number = 0;
    let count: number = 1;

    for (let i = 1; i < nums.length; i++) {
        nums[i] === nums[maj] ? count++ : count--;

        if (count === 0) {
            maj = i;
            count = 1;
        }
    }

    return nums[maj];
};