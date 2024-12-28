function maximumWealth(accounts: number[][]): number {
  const customersWealth: number[] = new Array(accounts.length).fill(0);

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      customersWealth[i] += accounts[i][j];
    }
  }

  return Math.max(...customersWealth);
}
