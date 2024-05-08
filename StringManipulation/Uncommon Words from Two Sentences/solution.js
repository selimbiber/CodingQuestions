const uncommonFromSentences = function (s1, s2) {
  const s1Words = s1.split(" ");
  const s2Words = s2.split(" ");
  const uncommonWords = [];

  s1Words.forEach((word) => {
    if (s1Words.filter((w) => w === word).length === 1 && !s2Words.includes(word)) {
      uncommonWords.push(word);
    }
  });

  s2Words.forEach((word) => {
    if (s2Words.filter((w) => w === word).length === 1 && !s1Words.includes(word)) {
      uncommonWords.push(word);
    }
  });

  return uncommonWords;
};

/* NOTE - Examples
  
Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
*/

/* NOTE - Results
  
submitted at Apr 04, 2024 23:47
  
runtime 61ms and beats 44.44% of users with JavaScript

memory 51.70 MB and beats 40.91% of users with JavaScript
*/
