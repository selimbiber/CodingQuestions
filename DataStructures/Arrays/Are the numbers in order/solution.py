def in_asc_order(arr):
    return arr == sorted(arr)

# Example usage:
print(in_asc_order([1, 2, 4, 7, 19]))  # True
print(in_asc_order([1, 2, 3, 4, 5, 10, 6, 7, 8, 9]))  # False