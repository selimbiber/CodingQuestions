def combat(health, damage):
    return max(health - damage, 0)

# Example usage:
# print(combat(100, 30))  # Output: 70