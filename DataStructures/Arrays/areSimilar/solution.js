function solution(a, b) {
  if (a.length !== b.length) return false;

  const diffIndices = [];

  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      diffIndices.push(index);
    }
  }

  if (diffIndices.length === 0) return true;
  else if (diffIndices.length === 2) {
    const [i, j] = diffIndices;
    return a[i] === b[j] && a[j] === b[i];
  }

  return false;
}
