function enough(cap: number, on: number, wait: number): number {
  return cap - on > wait ? 0 : wait - (cap - on);
}

// Example usage:
console.log(enough(10, 5, 5)); // Output: 0
console.log(enough(100, 60, 50));; // Output: 10