def zero(operation=None):
    if not operation:
        return 0
    return operation(0)

def one(operation=None):
    if not operation:
        return 1
    return operation(1)

def two(operation=None):
    if not operation:
        return 2
    return operation(2)

def three(operation=None):
    if not operation:
        return 3
    return operation(3)

def four(operation=None):
    if not operation:
        return 4
    return operation(4)

def five(operation=None):
    if not operation:
        return 5
    return operation(5)

def six(operation=None):
    if not operation:
        return 6
    return operation(6)

def seven(operation=None):
    if not operation:
        return 7
    return operation(7)

def eight(operation=None):
    if not operation:
        return 8
    return operation(8)

def nine(operation=None):
    if not operation:
        return 9
    return operation(9)

def plus(num):
    return lambda x: x + num

def minus(num):
    return lambda x: x - num

def times(num):
    return lambda x: x * num

def divided_by(num):
    return lambda x: x // num

# Example usage:
# result = seven(times(five()))  # Should return 35
# result = four(plus(nine()))    # Should return 13
