const strStr = (haystack: string, needle: string): number => haystack.indexOf(needle);

// Example usage:
console.log(strStr("hello", "ll")); // Output: 2    
console.log(strStr("aaaaa", "bba")); // Output: -1
console.log(strStr("", "")); // Output: 0