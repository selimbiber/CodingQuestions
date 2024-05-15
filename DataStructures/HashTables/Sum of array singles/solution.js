function repeats(arr) {
  const counts = {};

  for (const num of arr) {
    counts[num] ? counts[num]++ : (counts[num] = 1);
  }

  let sum = 0;

  for (const key in counts) {
    if (counts[key] === 1) {
      sum += Number(key);
    }
  }

  return sum;
}
