class Series {
  #errors = {
    empty: () => {
      throw new Error("series cannot be empty");
    },
    zero: () => {
      throw new Error("slice length cannot be zero");
    },
    negative: () => {
      throw new Error("slice length cannot be negative");
    },
    greater: () => {
      throw new Error("slice length cannot be greater than series length");
    },
  };

  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    if (this.series === "") this.#errors.empty();
    if (sliceLength === 0) this.#errors.zero();
    if (sliceLength < 0) this.#errors.negative();
    if (sliceLength > this.series.length) this.#errors.greater();

    const slicesArray = [];

    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const newSlice = [...this.series.slice(i, i + sliceLength)].map(Number);
      slicesArray.push(newSlice);
    }

    return slicesArray;
  }
}

// Example usage:
const seriesObj = new Series("123456789");
console.log(seriesObj.slices(3)); // Output: [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7], [6, 7, 8], [7, 8, 9]]
console.log(seriesObj.errors); // undefined (errors object is not accessible)
