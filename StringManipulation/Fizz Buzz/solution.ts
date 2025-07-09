const fizzBuzz = function (n: number): string[] {
    const result = [];

    for (let num = 1; num <= n; num++) {
        let value = "";

        if (num % 3 === 0) value += "Fizz";
        if (num % 5 === 0) value += "Buzz";
        if (value === "") value = num.toString();

        result.push(value);
    }

    return result;
};

// Example usage:
const n = 15;
console.log(fizzBuzz(n)); // Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]