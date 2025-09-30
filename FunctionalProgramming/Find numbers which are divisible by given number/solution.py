def divisible_by(numbers, divisor):
    return [num for num in numbers if num % divisor == 0]

# Example usage:
numbers = [10, 15, 20, 25, 30]
divisor = 5
result = divisible_by(numbers, divisor)
print(result)  # Output: [10, 15, 20, 25, 30]