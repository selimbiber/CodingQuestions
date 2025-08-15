def self_dividing_numbers(left: int, right: int) -> list[int]:
    def is_self_dividing(num: int) -> bool:
        for digit_char in str(num):
            digit = int(digit_char)
            if digit == 0 or num % digit != 0:
                return False
        return True

    if left > right or left < 1:
        raise ValueError("Invalid range: left should be <= right and >= 1.")

    return [num for num in range(left, right + 1) if is_self_dividing(num)]

# Example usage:
if __name__ == "__main__":
    print(self_dividing_numbers(1, 22))

# Example output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]