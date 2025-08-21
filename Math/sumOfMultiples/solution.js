function sumOfMultiples(n) {
    const divisibles = [];
    const divisors = [3, 5, 7];

    for (let i = 1; i <= n; i++) {
        const isDivisible = divisors.some((divisor) => i % divisor === 0);
        if (isDivisible) divisibles.push(i);
    }

    return divisibles.reduce((totalVal, curVal) => totalVal + curVal, 0);
}

// Example usage:
console.log(sumOfMultiples(10)); // Output: 33 (3 + 5 + 6 + 7 + 9 + 10)