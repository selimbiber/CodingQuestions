function solution(a) {
  const result = [];
  const temp = [];

  for (let i = 0; i < a.length; i++) {
    a[i] === -1 ? (result[i] = -1) : temp.push(a[i]);
  }

  temp.sort((a, b) => a - b);

  let tempIndex = 0;

  for (let i = 0; i < a.length; i++) {
    if (result[i] === -1) continue;
    result[i] = temp[tempIndex++];
  }

  return result;
}
