function findWords(words: string[]): string[] {
    const rowMap: Record<string, number> = {};
    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    rows.forEach((row, idx) => {
        for (const char of row) {
            rowMap[char] = idx;
        }
    });

    return words.filter((word) => {
        const lower = word.toLowerCase();
        const firstRow = rowMap[lower[0]];

        for (let i = 1; i < lower.length; i++) {
            if (rowMap[lower[i]] !== firstRow) {
                return false;
            }
        }
        return true;
    });
}

// Example usage
const words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words)); // Output: ["Alaska", "Dad"]