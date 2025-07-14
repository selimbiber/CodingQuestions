const reverse = function (x: number): number {
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);

    const y = x.toString();

    if (y.startsWith("-")) {
        const reversed = "-" + y.slice(1).split("").reverse().join("");
        return parseInt(reversed) < MIN_INT ? 0 : parseInt(reversed);
    }

    const reversed = y.split("").reverse().join("");
    return parseInt(reversed) > MAX_INT ? 0 : parseInt(reversed);
};

// Example usage:
// console.log(reverse(123)); // Output: 321
// console.log(reverse(-123)); // Output: -321