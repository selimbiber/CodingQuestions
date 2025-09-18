def multiple_of_index(array):
    result = []
    for index, value in enumerate(array):
        if index == 0 or value % index == 0:
            result.append(value)
    return result

# Example usage:
# print(multiple_of_index([22, -6, 32, 82, 9, 25]))  # Output: [-6, 32, 82]