function maximumValue(strs) {
  let maxVal = 0;

  for (const str of strs) {
    const curVal = isNaN(Number(str)) ? str.length : parseInt(str);

    if (curVal > maxVal) maxVal = curVal;
  }

  return maxVal;
}
