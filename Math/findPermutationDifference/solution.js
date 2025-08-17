function findPermutationDifference(s, t) {
    const indexMap = {};

    for (let i = 0; i < s.length; i++) {
        indexMap[s[i]] = i;
    }

    let diff = 0;

    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        const sIndex = indexMap[char];
        diff += Math.abs(sIndex - i);
    }

    return diff;
}

// Example usage:
console.log(findPermutationDifference("abcde", "edcba")); // Output: 10
console.log(findPermutationDifference("abc", "cba")); // Output: 4