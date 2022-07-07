#!/usr/bin/python3
import hidden_4
if __main__ == "__name__":
    names = dir(hidden_4)
    names.sort()
    for attr in names:
        if attr in names:
            print(attr)
