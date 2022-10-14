#!/usr/bin/node
// A script that displays the status code of a GET request
const url = process.argv.slice(2)[0];
const request = require('request');

request(url, (err, response, body) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`code: ${reponse.statusCode}`);
    }
});