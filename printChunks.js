var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

console.log(requestOptions.host + requestOptions.path);
  https.get('https://' + requestOptions.host + requestOptions.path,function(response) {
    if(response.statusCode !== 200) {
      console.log('You have a status problem' , response.status);
    }
    // response.setEncoding('utf8');
    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log(data + '/n' + '/n' + '/n' + '/n' + '/n' + '/n' );
    })
  });

}


getAndPrintHTMLChunks();