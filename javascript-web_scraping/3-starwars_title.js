#!/usr/bin/node
// A script that prints the title of a Star Wars movie
// where the episode number matches a given integer
const args = process.argv.slice(2);
const request = require('request');

const url = `https://swapi-api.hbtn.io/api/films/${args[0]}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const parsedData = JSON.parse(body);
    console.log(parsedData.title);
  }
});
