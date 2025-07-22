function countMatches(items, ruleKey, ruleValue) {
    const itemsObj = items.map((values) => ({
        type: values[0],
        color: values[1],
        name: values[2],
    }));

    return itemsObj.filter((item) => item[ruleKey] === ruleValue).length;
}

// Example usage:
const items = [["phone", "blue", "pixel"],
["computer", "silver", "lenovo"],
["phone", "gold", "iphone"]];
const ruleKey = "color";
const ruleValue = "silver";
console.log(countMatches(items, ruleKey, ruleValue)); // Output: 1