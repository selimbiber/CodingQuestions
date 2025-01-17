function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
  type Item = { [key: string]: string };
  const itemsObj: Item[] = items.map((values) => ({
    type: values[0],
    color: values[1],
    name: values[2],
  }));

  return itemsObj.filter((item) => item[ruleKey] === ruleValue).length;
}
