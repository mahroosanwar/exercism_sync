def is_armstrong_number(number):
    num_of_digits = 0
    temp = number
    while temp:
        temp //= 10
        num_of_digits += 1
        
    temp = number
    result = 0
    while temp:
        rem = temp%10
        temp //= 10
        result += rem**num_of_digits

    return result == number