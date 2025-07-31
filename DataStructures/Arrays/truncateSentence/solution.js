const truncateSentence = (s, k) => s.split(" ").splice(0, k).join(" ");

// Example usage:
// console.log(truncateSentence("Hello how are you Contestant", 4)); // Output: "Hello how are you"