def usdcny(usd: float) -> str:
    conversion_rate: float = 6.75

    return f"{usd * conversion_rate:.2f} Chinese Yuan"

# Example usage:
print(usdcny(100))  # Output: "675.00 Chinese Yuan"