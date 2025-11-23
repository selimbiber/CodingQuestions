def reverse_seq(n: int) -> list[int]:
    if n < 1:
        return []
    return list(range(n, 0, -1))

# Example usage:
if __name__ == "__main__":
    print(reverse_seq(5))  # Output: [5, 4, 3, 2, 1]
    print(reverse_seq(1))  # Output: [1]
    print(reverse_seq(0))  # Output: []