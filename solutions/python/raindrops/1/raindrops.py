def convert(number):
    div_by_3 = number % 3 == 0
    div_by_5 = number % 5 == 0
    div_by_7 = number % 7 == 0
    if div_by_3:
        if div_by_5 and div_by_7:
            return "PlingPlangPlong"
        elif div_by_5:
            return "PlingPlang"
        elif div_by_7:
            return "PlingPlong"
        return "Pling"
    elif div_by_5:
        if div_by_7:
            return "PlangPlong"
        return "Plang"
    elif div_by_7:
        return "Plong"
    else:
        return f'{number}'