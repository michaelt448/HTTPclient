var https = require('https');

function getAndPrintHTML () {
  let bufferingVariable;
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


console.log(requestOptions.host + requestOptions.path);
  https.get('https://' + requestOptions.host + requestOptions.path,function(response) {
    if(response.statusCode !== 200) {
      console.log('You have a status problem' , response.status);
    }
    response.setEncoding('utf8');
    response.on('data', function(data) {
      bufferingVariable += data
      console.log(bufferingVariable + '/n' + '/n' + '/n' + '/n' + '/n' + '/n' );
    })
  });

}


getAndPrintHTML();