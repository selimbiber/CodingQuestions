function spinWords(string) {
  const splitString = string.split(" ");

  const resultArray = splitString.map((word) => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  });

  return resultArray.join(" ");
}

/* NOTE Examples

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/
