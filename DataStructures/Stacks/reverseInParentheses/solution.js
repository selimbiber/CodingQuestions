function solution(inputString) {
  const stack = [];
  const str = inputString.split("");
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(result.length);
    } else if (str[i] === ")") {
      const startIndex = stack.pop();
      const toReverse = result.slice(startIndex);
      const reversed = toReverse.split("").reverse().join("");
      result = result.slice(0, startIndex) + reversed;
    } else {
      result += str[i];
    }
  }

  return result;
}
