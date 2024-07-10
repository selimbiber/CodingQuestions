const eggCount = (displayValue) => {
  const binaryString = displayValue.toString(2);

  let count = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString.charAt(i) === "1") count++;
  }

  return count;
};
