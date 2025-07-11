const lengthOfLastWord = (s: string): number => s.trim().split(" ").pop().length;

// Example usage:
// console.log(lengthOfLastWord("Hello World")); // Output: 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4