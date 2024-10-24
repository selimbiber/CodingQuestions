function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const [smallers, equals, greaters] = [[], [], []];

  for (const num of array) {
    if (num < pivot) smallers.push(num);
    else if (num > pivot) greaters.push(num);
    else equals.push(num);
  }

  return [...quickSort(smallers), ...equals, ...quickSort(greaters)];
}
