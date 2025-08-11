def is_balanced(num: str) -> bool:
    digits = [int(d) for d in num]
    sum_of_evens = 0
    sum_of_odds = 0

    for i, digit in enumerate(digits):
        if i % 2 == 0:
            sum_of_evens += digit
        else:
            sum_of_odds += digit

    return sum_of_evens == sum_of_odds

# Example usage:
# print(is_balanced("1230"))  # Output: True
# print(is_balanced("1234"))  # Output: False