def array_plus_array(arr1, arr2):
    sum_ = 0

    for num in arr1:
        sum_ += num

    for num in arr2:
        sum_ += num

    return sum_

# Example usage:
# print(array_plus_array([1, 2, 3], [4, 5, 6]))  # Output: 21