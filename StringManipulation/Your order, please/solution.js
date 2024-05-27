function order(words) {
  const wordsArray = words.split(" ");
  const sortedWordsArray = [];

  for (let i = 1; i <= wordsArray.length; i++) {
    const word = wordsArray.find((w) => w.includes(i));
    sortedWordsArray.push(word);
  }

  return sortedWordsArray.join(" ");
}

/* NOTE Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
