function maximumWealth(accounts) {
    const customersWealth = new Array(accounts.length).fill(0);

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            customersWealth[i] += accounts[i][j];
        }
    }

    return Math.max(...customersWealth);
}

// Example usage:
const accounts = [
    [1, 2, 3],
    [3, 2, 1],
    [4, 5, 6]
];
console.log(maximumWealth(accounts)); // Output: 15
// Explanation: The third customer has the maximum wealth of 15 (4 + 5 + 6).