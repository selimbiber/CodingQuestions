function findNonMinOrMax(nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    for (const num of nums) {
        if (num !== max && num !== min) {
            return num;
        }
    }

    return -1;
};