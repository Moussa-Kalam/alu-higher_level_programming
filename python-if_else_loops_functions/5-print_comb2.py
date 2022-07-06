#!/usr/bin/python3
# Print numbers from 0 to 99
# Numbers must be separated by ',' followed by a space
# Numbers should be printed in ascending order, with two digits


for number in range(0, 100):
    print("{:02d}".format(number), end=", ")
print("{}".format(number))
