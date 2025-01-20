function cellsInRange(s: string): string[] {
  const [start, end] = s.split(":");
  const startCol = start.charCodeAt(0);
  const startRow = parseInt(start.slice(1));
  const endCol = end.charCodeAt(0);
  const endRow = parseInt(end.slice(1));

  const result: string[] = [];

  for (let col = startCol; col <= endCol; col++) {
    for (let row = startRow; row <= endRow; row++) {
      const cell = String.fromCharCode(col) + row;
      result.push(cell);
    }
  }

  return result;
}
