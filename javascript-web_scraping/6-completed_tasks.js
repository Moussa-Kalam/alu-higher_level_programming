#!/usr/bin/node
// A script that computes the number of tasks completed by user id
const apiUrl = process.argv.slice(2)[0];
const request = require('request');

request(apiUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const result = {};
    const parseData = JSON.parse(body);
    parseData.forEach(item => {
      if (item.completed) {
        if (result[item.userID] === undefined) {
          result[item.userId] = 1;
        } else {
          result[item.userId] += 1;
        }
      }
    });
    console.log(result);
  }
});
