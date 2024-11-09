function solution(image) {
  const blurredPixels = [];

  for (let i = 1; i < image.length - 1; i++) {
    const row = [];
    for (let j = 1; j < image[i].length - 1; j++) {
      let sum = 0;
      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          sum += image[i + k][j + l];
        }
      }
      const average = Math.floor(sum / 9);
      row.push(average);
    }
    blurredPixels.push(row);
  }

  return blurredPixels;
}
