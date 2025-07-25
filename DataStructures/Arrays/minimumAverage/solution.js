function minimumAverage(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    const averages = [];

    while (sortedNums.length >= 2) {
        const min = sortedNums.shift();
        const max = sortedNums.pop();

        if (min !== undefined && max !== undefined) {
            const average = (min + max) / 2;
            averages.push(average);
        }
    }

    return averages.length > 0 ? Math.min(...averages) : 0;
}

// Example usage
// const nums = [1, 3, 5, 7];
// console.log(minimumAverage(nums)); // Output: 2