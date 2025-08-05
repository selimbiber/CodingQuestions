function interpret(command) {
    let result = "";
    const chars = command.split("");

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === "(" && chars[i + 1] === ")") {
            result += "o";
            i++;
        } else if (chars[i] !== "(" && chars[i] !== ")") {
            result += chars[i];
        }
    }

    return result;
}

// Example usage:
// console.log(interpret("G()(al)")); // Output: "Goal"