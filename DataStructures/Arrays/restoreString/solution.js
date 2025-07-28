function restoreString(s, indices) {
    const shuffledStrings = new Array(s.length).fill("");

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const index = indices[i];

        shuffledStrings[index] = char;
    }

    return shuffledStrings.join("");
}

// Example usage:
// const s = "code";
// const indices = [3, 1, 2, 0];
// console.log(restoreString(s, indices)); // Output: "edoc"