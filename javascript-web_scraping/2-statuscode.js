#!/usr/bin/node
// A script that displays the status code of a GET request
const url = process.argv.slice(2)[0];
const request = require('request');

request(url, (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`code: ${reponse.statusCode}`);
    }
});