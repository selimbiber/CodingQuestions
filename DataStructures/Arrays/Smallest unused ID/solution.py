def next_id(ids):
    sorted_ids = sorted(set(ids))
    for i in range(len(sorted_ids) + 1):
        if i not in sorted_ids:
            return i

# Example usage:
# print(next_id([0, 1, 2, 3, 5]))  # Output: 4