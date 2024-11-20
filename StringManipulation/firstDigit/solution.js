function solution(inputString) {
  const str = inputString.split("");

  for (const s of str) {
    if (s >= "0" && s <= "9") return s;
  }
}
