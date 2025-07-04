const isEmpty = (obj: {}): boolean => Object.entries(obj).length === 0;

// Example usage:
console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false