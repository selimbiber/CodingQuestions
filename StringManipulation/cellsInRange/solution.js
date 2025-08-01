function cellsInRange(s) {
    const [start, end] = s.split(":");
    const startCol = start.charCodeAt(0);
    const startRow = parseInt(start.slice(1));
    const endCol = end.charCodeAt(0);
    const endRow = parseInt(end.slice(1));

    const result = [];

    for (let col = startCol; col <= endCol; col++) {
        for (let row = startRow; row <= endRow; row++) {
            const cell = String.fromCharCode(col) + row;
            result.push(cell);
        }
    }

    return result;
}

// Example usage:
console.log(cellsInRange("A1:B2"));// Output: ["A1", "A2", "B1", "B2"]