def check_is_prime(number):
    return True


def check_is_odd(number):
    return True


def check_is_palindrome(number):
    return True


def check_armstrong(number):
    return True


def get_number_stats(number):
    is_prime = check_is_prime(number)
    is_odd = check_is_odd(number)
    is_palindrome = check_is_palindrome(number)
    is_armstrong = check_armstrong(number)

    return {
        "is_prime": is_prime,
        "is_odd": is_odd,
        "is_palindrome": is_palindrome,
        "is_armstrong": is_armstrong,
    }
