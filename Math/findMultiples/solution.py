def findMultiples(integer, limit):
    multiples = []
    multiple = integer

    while multiple <= limit:
        multiples.append(multiple)
        multiple += integer

    return multiples

# Example usage:
# print(findMultiples(5, 25))  # Output: [5, 10, 15, 20, 25]