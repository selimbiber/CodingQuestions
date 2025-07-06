const detectCapitalUse = function (word: string): boolean {
    const firstLetters: boolean = word.charAt(0) === word[0].toUpperCase();
    const otherLetters: boolean = word.slice(1) === word.slice(1).toLowerCase();

    if (word === word.toUpperCase() || word === word.toLowerCase()) return true;
    if (firstLetters && otherLetters) return true;

    return false;
};

// Example usage:
console.log(detectCapitalUse("USA")); // true
console.log(detectCapitalUse("leetcode")); // true
console.log(detectCapitalUse("Google")); // true
console.log(detectCapitalUse("FlaG")); // false