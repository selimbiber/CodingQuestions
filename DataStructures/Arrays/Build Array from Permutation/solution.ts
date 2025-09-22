const buildArray = function (nums: number[]): number[] {
    const ans: number[] = [];

    for (const num of nums) {
        ans.push(nums[num]);
    }

    return ans;
};