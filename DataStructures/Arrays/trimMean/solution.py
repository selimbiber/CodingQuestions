def trimMean(arr):
    arr.sort()

    n = len(arr)
    k = int(0.05 * n)

    trimmed_array = arr[k:n - k]
    mean = sum(trimmed_array) / len(trimmed_array)

    return mean

# Example usage:
if __name__ == "__main__":
    example_array = [6, 2, 7, 5, 10, 8, 4, 9, 1, 3]
    result = trimMean(example_array)
    print(f"The trimmed mean is: {result}") # Output: The trimmed mean is: 5.5