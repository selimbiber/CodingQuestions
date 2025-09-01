function convertTemperature(celsius) {
  return [
    Number((celsius + 273.15).toFixed(5)), // Kelvin
    Number((celsius * 1.8 + 32).toFixed(5)), // Fahrenheit
  ];
}

// Example usage:
console.log(convertTemperature(36.5)); // Output: [309.65, 97.7]
console.log(convertTemperature(0));    // Output: [273.15, 32]
console.log(convertTemperature(-40));  // Output: [233.15, -40]