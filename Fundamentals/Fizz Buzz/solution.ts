function fizzbuzz(n: number): (string | number)[] {
    const result: (string | number)[] = [];

    for (let i = 1; i <= n; i++) {
        let value: string | number = i;

        if (i % 3 === 0 || i % 5 === 0) {
            value = "";
            if (i % 3 === 0) value += "Fizz";
            if (i % 5 === 0) value += "Buzz";
        }

        result.push(value);
    }

    return result;
}