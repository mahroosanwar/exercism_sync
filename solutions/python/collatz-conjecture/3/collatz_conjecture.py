def steps(number):
    if number <= 0:
        raise ValueError("Only positive integers are allowed")
    step = 0
    while number != 1:
        number  = number*3 + 1 if number % 2 else number / 2
        step += 1
    return step