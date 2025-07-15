const scoreOfString = (s: string) => {
  let score = 0;

  for (let i = 1; i < s.length; i++) {
    const currentVal = s[i - 1].charCodeAt(0);
    const nextVal = s[i].charCodeAt(0);

    score += Math.abs(currentVal - nextVal);
  }

  return score;
};

// Example usage:
console.log(scoreOfString("abc")); // Output: 2 (1 + 1)
console.log(scoreOfString("xyz")); // Output: 4 (1 + 1 + 2)