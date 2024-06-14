const isSameRow = (word, charRows) => {
  const rowSet = new Set();

  for (const char of word.toLowerCase()) {
    for (const row of charRows) {
      if (row.includes(char)) {
        rowSet.add(row);
        break;
      }
    }
  }

  return rowSet.size === 1;
};

const findWords = function (words) {
  const charRows = [[..."qwertyuiop"], [..."asdfghjkl"], [..."zxcvbnm"]];

  return words.filter((word) => isSameRow(word, charRows));
};

/* NOTE - Examples
  
Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:

Input: words = ["omk"]
Output: []

Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
*/

/* NOTE - Results
  
submitted at Jun 13, 2024 14:51
  
runtime 53ms and beats 47.07% of users with JavaScript

memory 49.14 MB and beats 12.07% of users with JavaScript
*/
