function binarySearch(searchList, value) {
  const targetValue = value;
  const arrayPath = [];

  let lowPointer = 0;
  let highPointer = searchList.length - 1;

  while (lowPointer <= highPointer) {
    const midPointer = Math.floor((lowPointer + highPointer) / 2);
    const midValue = searchList[midPointer];

    arrayPath.push(midValue);

    if (midValue === targetValue) {
      return arrayPath;
    } else if (midValue < targetValue) {
      lowPointer = midPointer + 1;
    } else {
      highPointer = midPointer - 1;
    }
  }

  return "Value Not Found";
}
