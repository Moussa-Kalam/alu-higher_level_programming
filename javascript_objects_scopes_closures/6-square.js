#!/usr/bin/node
// Class Square that defines a square and inherits from Square of 5-square.js

const previousSquare = require('./5-square');

class Square extends previousSquare {
  charPrint (c) {
    if (c !== undefined) {
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    } else {
      this.print();
    }
  }
}
module.exports = Square;
