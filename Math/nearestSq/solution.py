import math

def nearest_sq(n: int) -> int:
    root = math.isqrt(n)

    lower_square = root * root
    upper_square = (root + 1) * (root + 1)

    if lower_square == n:
        return n

    if (n - lower_square) <= (upper_square - n):
        return lower_square
    return upper_square