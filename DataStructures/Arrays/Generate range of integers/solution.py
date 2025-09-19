def generate_range(min_val, max_val, step):
    result = []

    for i in range(min_val, max_val + 1, step):
        result.append(i)

    return result

# Example usage:
print(generate_range(2, 10, 2))  # Output: [2, 4, 6, 8, 10]