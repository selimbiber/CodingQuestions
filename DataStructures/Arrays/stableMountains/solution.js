function stableMountains(height, threshold) {
    const stables = [];

    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] > threshold) stables.push(i);
    }

    return stables;
}

// Example usage:
const heights = [1, 3, 2, 5, 4];
const threshold = 2;
console.log(stableMountains(heights, threshold)); // Output: [2, 4]