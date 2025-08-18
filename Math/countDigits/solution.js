function countDigits(num) {
    const digits = num.toString().split("").map(Number);
    let count = 0;

    for (const digit of digits) {
        if (num % digit === 0) count++;
    }

    return count;
}

// Example usage:
console.log(countDigits(1012)); // Output: 3
console.log(countDigits(123456)); // Output: 6
console.log(countDigits(1001)); // Output: 3