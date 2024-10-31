function pairwise(arr, arg) {
  let sum = 0;
  const usedIndices = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (usedIndices.has(i)) continue;
    const remainingVal = arg - arr[i];

    for (let j = i + 1; i < arr.length; j++) {
      if (!usedIndices.has(j) && arr[j] === remainingVal) {
        sum += i + j;
        usedIndices.add(i);
        usedIndices.add(j);
        break;
      }
    }
  }

  return sum;
}
