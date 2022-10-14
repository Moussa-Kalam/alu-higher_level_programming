#!/usr/bin/node
// A script that reads and prints the content of a file
const file = process.argv.slice(2)[0];
const fs = require('fs');

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
