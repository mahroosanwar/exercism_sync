def square(number):
    if number < 1 or number > 64 :
        raise ValueError("square must be between 1 and 64")
    result = 1
    for i in range(number-1):
        result *= 2
    return result

def total():
    result = 0
    for i in range(1, 65):
        result += square(i)
    return result