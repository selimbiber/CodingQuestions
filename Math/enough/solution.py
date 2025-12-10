def enough(cap, on, wait):
    return 0 if cap - on > wait else wait - (cap - on)

# Example usage:
# print(enough(10, 5, 5))  # Output: 0
# print(enough(100, 60, 50))  # Output: 10