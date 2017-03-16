var request = require('request');

var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;

module.exports = function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Student Project"
    }
  };
  request.get(options, (err, response, body) => {
    if (err) {
      console.log("error", err);
      return false;
    }
    var data = JSON.parse(body);
    data.forEach((person) => {
      downloadImageByURL(person.avatar_url, './avatars/' + person.login + '.jpg');
    });
  });
};