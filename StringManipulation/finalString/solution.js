function finalString(s) {
    let result = "";

    for (const c of s) {
        if (c === "i") {
            result = result.split("").reverse().join("");
        } else {
            result += c;
        }
    }

    return result;
}

// Example usage:
console.log(finalString("abcde")); // Output: "abcde"
console.log(finalString("abcide")); // Output: "cbade"