function solution(inputString) {
  let newString = "";

  for (let i = 0; i < inputString.length; i++) {
    const letter = inputString[i];
    let nextCharCode = letter.charCodeAt(0) + 1;
    if (nextCharCode > 122) nextCharCode = 97;
    newString += String.fromCharCode(nextCharCode);
  }

  return newString;
}
