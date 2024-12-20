class Solution {

/**
 * @param Float $celsius
 * @return Float[]
 */
function convertTemperature($celsius) {
    return [
        (float) round($celsius + 273.15, 5),  // Kelvin
        (float) round($celsius * 1.80 + 32.00, 5)  // Fahrenheit
    ];
}
}