const getArgumentsLength = function (...args: unknown[]): number {
  return args.length;
};

// Example usage:
console.log(getArgumentsLength(1, 2, 3)); // Output: 3
console.log(getArgumentsLength("a", "b")); // Output: 2