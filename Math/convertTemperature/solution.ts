function convertTemperature(celsius: number): number[] {
  return [
    Number((celsius + 273.15).toFixed(5)), // Kelvin
    Number((celsius * 1.8 + 32).toFixed(5)), // Fahrenheit
  ];
}
