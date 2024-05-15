function myLanguages(results) {
  const sortedScores = Object.values(results)
    .sort((a, b) => b - a)
    .filter((num) => num >= 60);
  const result = [];

  for (const score of sortedScores) {
    const language = Object.keys(results).find((key) => results[key] === score);
    if (language) result.push(language);
  }

  return result;
}

/* NOTE Examples

{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/
