#!/usr/bin/python3
def uppercase(str):
    for i in str:
        if ord(i) >= 65 and ord(i) <= 90:
            c = chr(ord(i) - 32)
        print("{}".format(i), end="")
    print()
