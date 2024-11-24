function solution(inputString) {
  const str = inputString.split("");
  let digits = "";

  for (const s of str) {
    if (isNaN(s) || s === " ") break;
    digits += s;
  }

  return digits;
}
