function stringy(size) {
  let result = "";

  for (let i = 1; i <= size; i++) {
    i % 2 === 1 ? (result += 1) : (result += 0);
  }

  return result;
}
