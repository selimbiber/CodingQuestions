function sortSentence(s) {
  const words = s.split(" ");

  const sortedWords = words.map((word) => {
    const position = parseInt(word[word.length - 1]);
    const originalWord = word.slice(0, -1);
    return { position, originalWord };
  });

  sortedWords.sort((a, b) => a.position - b.position);

  const originalSentence = sortedWords.map((item) => item.originalWord).join(" ");

  return originalSentence;
}

// Example usage:
// console.log(sortSentence("is2 sentence4 This1 a3")); // Output: "This is a sentence"