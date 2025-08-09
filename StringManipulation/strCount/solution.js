function strCount(str, letter) {
    let counter = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) counter++;
    }

    return counter;
}

// Test cases
console.log(strCount("Hello", "o")); // Output: 1
console.log(strCount("Hello", "l")); // Output: 2
console.log(strCount("Hello", "x")); // Output: 0
console.log(strCount("", "z")); // Output: 0