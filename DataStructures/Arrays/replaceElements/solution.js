function replaceElements(arr) {
    const result_array = [];
    let maxFromRight = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const current = arr[i];
        result_array[i] = maxFromRight;

        if (current > maxFromRight) {
            maxFromRight = current;
        }
    }

    return result_array;
}

// Example usage:
const inputArray = [17, 18, 5, 4, 6, 1];
const outputArray = replaceElements(inputArray);
console.log(outputArray); // Output: [18, 6, 6, 6, 1, -1]