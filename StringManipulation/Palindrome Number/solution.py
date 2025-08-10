def is_palindrome(x):
    x_str = str(x)
    reversed_str = x_str[::-1]
    return x_str == reversed_str

# Example usage:
if __name__ == "__main__":
    number = 121
    print(f"Is {number} a palindrome? {is_palindrome(number)}")
    