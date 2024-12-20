class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
        return [
            float(f"{(celsius + 273.15):.5f}"), # Kelvin
            float(f"{(celsius * 1.80 + 32.00):.5f}") # Fahrenheit
        ]