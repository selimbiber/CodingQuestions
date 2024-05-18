function removeDuplicateWords(s) {
  const words = new Set(s.split(" "));

  return Array.from(words).join(" ");
}

/* NOTE Examples

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/
