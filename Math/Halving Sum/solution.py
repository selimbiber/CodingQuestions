def halving_sum(n):
    total = 0
    
    while n:
        total += n
        n //= 2
    return total