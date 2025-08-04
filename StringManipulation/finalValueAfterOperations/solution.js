function finalValueAfterOperations(operations) {
    const symbols = operations.map((item) => item.replace("X", ""));

    let result = 0;

    for (const symbol of symbols) {
        symbol === "--" ? --result : ++result;
    }

    return result;
}

// Example usage:
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
// Output: 1
console.log(finalValueAfterOperations(["++X", "++X", "X--"]));
// Output: 2