def convert(number):
    div_by_3 = number % 3 == 0
    div_by_5 = number % 5 == 0
    div_by_7 = number % 7 == 0

    result = ''
    if div_by_3:
        result += "Pling"
    if div_by_5:
        result += "Plang"
    if div_by_7:
        result += "Plong"
    return result or str(number)