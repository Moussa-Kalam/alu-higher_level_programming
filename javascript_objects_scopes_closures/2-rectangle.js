#!/usr/bin/node
// A class Rectangle that defines a rectangle
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
    if (w == null || h == null) return null;
    if (w <= 0 || h <= 0) return null;
    }
  }

module.exports = Rectangle;
