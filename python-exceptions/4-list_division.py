#!/usr/bin/python3
# A function that divides element by element 2 lists


def safe_print_division(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        result = None
    finally:
        print("Inside result: {}".format(result))
        return result
