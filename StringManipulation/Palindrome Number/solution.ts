const isPalindrome = function (x: string): boolean {
    return Number(x.toString().split("").reverse().join("")) === x;
};

// Example usage:
// console.log(isPalindrome(121)); // Output: true
// console.log(isPalindrome(-121)); // Output: false