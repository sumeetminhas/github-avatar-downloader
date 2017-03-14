var request = require('request');

var GITHUB_USER = "sumeetminhas";
var GITHUB_TOKEN = "5a4e9495f16c8d2e241542b82c9341f0d2410d32";

//console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Student Project"
    }
  }
  request(options, (err, response, body) => {
    if (err) {
      console.log("error", err);
      return false;
    }
    var data = JSON.parse(body);
    cb(data);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

