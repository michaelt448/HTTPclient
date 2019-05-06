const https = require('https');

function getHTML (options, callback) {
 let bufferingVariable;
 https.get('https://' + options.host + options.path,function(response) {
    if(response.statusCode !== 200) {
      console.log('You have a status problem' , response.status);
    }
    response.setEncoding('utf8');
    response.on('data', function(data) {
      bufferingVariable += data
      callback(bufferingVariable + '/n' + '/n' + '/n' + '/n' + '/n' + '/n' );
    })
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

//getHTML(requestOptions,printHTML);

module.exports = function getHTML(options,callback) {
let bufferingVariable;
https.get('https://' + options.host + options.path,function(response) {
if(response.statusCode !== 200) {
  console.log('You have a status problem' , response.status);
}
response.setEncoding('utf8');
response.on('data', function(data) {
  bufferingVariable += data
  callback(bufferingVariable + '/n' + '/n' + '/n' + '/n' + '/n' + '/n' );
    })
  });
};