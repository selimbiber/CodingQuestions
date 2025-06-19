const smallerNumbersThanCurrent = function (nums: number[]): number[] {
    return nums.map((numX) => {
        return nums.filter((numY) => numX > numY).length;
    });
};
