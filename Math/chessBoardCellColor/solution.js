function solution(cell1, cell2) {
  const y = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };

  const cell1Even = Math.abs(y[cell1[0]] - cell1[1]) % 2 === 0;
  const cell2Even = Math.abs(y[cell2[0]] - cell2[1]) % 2 === 0;

  if (cell1Even === cell2Even) return true;

  return false;
}
