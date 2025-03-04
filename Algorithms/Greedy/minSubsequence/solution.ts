function minSubsequence(nums: number[]): number[] {
    const sorted_nums = nums.slice().sort((a, b) => b - a);
    const subs: number[] = [];
    const totalSum = sorted_nums.reduce((total, current) => total + current, 0);
    let sumOfSubElements = 0;

    for (const num of sorted_nums) {
        subs.push(num);
        sumOfSubElements += num;

        if (sumOfSubElements > totalSum - sumOfSubElements) {
            return subs;
        }
    }

    return subs;
};