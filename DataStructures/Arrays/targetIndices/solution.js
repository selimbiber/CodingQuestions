function targetIndices(nums, target) {
    const sortedNums = nums.slice().sort((a, b) => a - b);
    const targetIndices = [];

    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === target) targetIndices.push(i);
    }

    return targetIndices;
}
