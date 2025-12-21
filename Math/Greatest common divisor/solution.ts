const mygcd = (x: number, y: number): number => {
  while (y !== 0) {
    let temp = y;

    y = x % y;
    x = temp;
  }

  return x;
};

// Example usage:
console.log(mygcd(48, 18)); // Output: 6
console.log(mygcd(56, 98)); // Output: 14