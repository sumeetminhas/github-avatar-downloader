var getRepoContributors = require('./getRepoContributors');
var args = process.argv.slice(2);

var owner = args[2];
var repo = args[3];

var request = require('request');
var fs = require('fs');

var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;

console.log('Welcome to the GitHub Avatar Downloader!');

function downloadImageByURL(url, filePath) {
  var req = request.get(url)
  .on('response', function (response) {
    console.log("we're downloading your response.");
    req.pipe(fs.createWriteStream(filePath));
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

