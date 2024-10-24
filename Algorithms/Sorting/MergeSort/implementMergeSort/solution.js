function mergeSort(array) {
  const length = array.length;
  if (length <= 1) return array;

  const median = Math.floor(length / 2);
  const firstHalf = mergeSort(array.slice(0, median));
  const lastHalf = mergeSort(array.slice(median));

  return merge(firstHalf, lastHalf);
}

function merge(firstHalf, lastHalf) {
  const [left, right] = [firstHalf, lastHalf];
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}
