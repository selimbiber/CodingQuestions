function finalValueAfterOperations(operations: string[]): number {
  const symbols: string[] = operations.map((item) => item.replace("X", ""));

  let result = 0;

  for (const symbol of symbols) {
    symbol === "--" ? --result : ++result;
  }

  return result;
}
