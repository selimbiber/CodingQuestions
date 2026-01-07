def get_sum(a: int, b: int) -> int:
    start = min(a, b)
    end = max(a, b)
    total = 0

    for i in range(start, end + 1):
        total += i

    return total

# Example usage:
# print(get_sum(1, 5))  # Output: 15
# print(get_sum(5, 1))  # Output: 15