def flip(dir: str, arr: list) -> list:
    return sorted(arr) if dir == "R" else sorted(arr, reverse=True)

# Example usage:
# print(flip("R", [3, 2, 1, 2])) # Output: [1, 2, 2, 3]
# print(flip("L", [1, 4, 5, 3, 5])) # Output: [5, 5, 4, 3, 1]