function solution(matrix) {
  const directions = [
    // Below Cells
    [1, -1],
    [1, 0],
    [1, 1],
    // Side Cells
    [0, -1],
    [0, 1],
    // Top Cells
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  return matrix.map((row, y) => {
    return row.map((_col, x) => {
      let minesCount = 0;

      directions.forEach(([dy, dx]) => {
        const newY = y + dy;
        const newX = x + dx;

        if (newY >= 0 && newY < matrix.length && newX >= 0 && newX < row.length) {
          if (matrix[newY][newX]) {
            minesCount++;
          }
        }
      });

      return minesCount;
    });
  });
}
