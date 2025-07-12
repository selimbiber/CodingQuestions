const countSegments = (s: string): number => s.split(" ").filter((segment) => segment.trim() !== "").length;

// Example usage:
// console.log(countSegments("Hello, my name is John")); // Output: 5
// console.log(countSegments("   ")); // Output: 0