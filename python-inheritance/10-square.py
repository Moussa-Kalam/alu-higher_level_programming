#!/usr/bin/python3
"""Defines a class Square that inherits from Reactable."""
Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    '''Represent a square.'''

    def __init__(self, size):
        """Intialize a new Rectangle.
         Args:
            width (int): The width of the new Rectangle.
            height (int): The height of the new Rectangle.
        """
        self.integer_validator('size', size)
        super().__init__(size, size)
        self.__size = size
