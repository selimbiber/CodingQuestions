function convertDateToBinary(date) {
    const [year, month, day] = date.split("-");

    const binaryYear = parseInt(year).toString(2);
    const binaryMonth = parseInt(month).toString(2);
    const binaryDay = parseInt(day).toString(2);

    return `${binaryYear}-${binaryMonth}-${binaryDay}`;
}

// Example usage:
console.log(convertDateToBinary("2023-10-05")); // Output: "11111100111-1010-101"
console.log(convertDateToBinary("2000-01-01")); // Output: "11111010000-1-1"