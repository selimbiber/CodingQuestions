def men_from_boys(arr):
    uniq = set(arr)
    evens = sorted(n for n in uniq if n % 2 == 0)
    odds = sorted((n for n in uniq if n % 2 != 0), reverse=True)
    return evens + odds