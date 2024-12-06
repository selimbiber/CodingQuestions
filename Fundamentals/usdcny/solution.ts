function usdcny(usd: number): string {
  const conversionRate: number = 6.75;

  return `${(usd * conversionRate).toFixed(2)} Chinese Yuan`;
}
