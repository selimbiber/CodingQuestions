function findWordsContaining(words, x) {
    const indices = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) indices.push(i);
    }

    return indices;
}

// Example usage:
// const words = ["apple", "banana", "cherry", "date"];
// const x = "a";
// console.log(findWordsContaining(words, x)); // Output: [0, 1, 3]