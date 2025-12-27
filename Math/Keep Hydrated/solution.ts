export const litres = (time: number): number => Math.floor(time * 0.5);

// Example usage:
console.log(litres(3)); // Output: 15
console.log(litres(6.7)); // Output: 3
console.log(litres(11.8)); // Output: 5