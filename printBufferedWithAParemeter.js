var https = require('https');

function getAndPrintHTML (options) {
  let bufferingVariable;

  /* Add your code here */

  https.get('https://' + options.host + options.path,function(response) {
    if(response.statusCode !== 200) {
      console.log('You have a status problem' , response.status);
    }
    // response.setEncoding('utf8');
    response.setEncoding('utf8');
    response.on('data', function(data) {
      bufferingVariable += data
      console.log(bufferingVariable + '/n' + '/n' + '/n' + '/n' + '/n' + '/n' );
    })
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions); /* Add your code here */
