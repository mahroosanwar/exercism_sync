def equilateral(sides):
    [a, b, c] = sides
    if (a+b) >= c and (b+c) >= a and (a+c) >= b and a!=0 and b!= 0 and c!=0:
        if a == b and b ==c and c==a:
            return True
    return False


def isosceles(sides):
    [a, b, c] = sides
    if (a+b) >= c and (b+c) >= a and (a+c) >= b and a!=0 and b!= 0 and c!=0:
        if a==b or b==c or a==c:
            return True
    return False


def scalene(sides):
    [a, b, c] = sides
    if (a+b) >= c and (b+c) >= a and (a+c) >= b and a!=0 and b!= 0 and c!=0:
        if a !=b and b!= c and c!= a:
            return True
    return False
