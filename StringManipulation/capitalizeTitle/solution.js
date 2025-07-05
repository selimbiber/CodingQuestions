function capitalizeTitle(title) {
    const words = title.split(' ');
    const result = [];

    for (let word of words) {
        word = word.toLowerCase();

        if (word.length > 2) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }

        result.push(word);
    }

    return result.join(' ');
};

// Example usage:
console.log(capitalizeTitle("capiTalIze tHe titLe")); // "Capitalize The Title"
console.log(capitalizeTitle("First leTTeR of EACH Word")); // "First Letter of Each Word"
console.log(capitalizeTitle("i lOve leetcode")); // "i Love Leetcode