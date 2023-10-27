import math


def check_is_prime(number):
    if number < 2:
        return False

    i = 2

    while i * i <= number:
        if number % i == 0:
            return False
        i += 1

    return True


def check_is_even(number):
    return True if (number % 2) == 0 else False


def check_is_palindrome(number: str):
    number = str(number)
    return True if number == number[::-1] else False


def check_armstrong(number):
    order = len(str(number))
    sum = 0
    temp = number

    while temp > 0:
        digit = temp % 10
        sum += digit ** order
        temp //= 10

    if number == sum:
        return "Yes, " + str(number) + " is an Armstrong number"
    else:
        return "No, " + str(number) + " is not an Armstrong number"


def find_factorial(number):
    if number > 25:
        return "Too big number"

    return math.factorial(number)


def get_number_stats(number):
    is_prime = check_is_prime(number)
    is_even = check_is_even(number)
    is_palindrome = check_is_palindrome(number)
    is_armstrong = check_armstrong(number)
    its_factorial = find_factorial(number)

    return {
        "is_prime": is_prime,
        "is_even": is_even,
        "is_odd": not is_even,
        "is_palindrome": is_palindrome,
        "is_armstrong": is_armstrong,
        "factorial": its_factorial,
    }
