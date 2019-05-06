var myFunc = require('./printHTMLWithCallback');
var https = require('https');

// console.log(myFunc);

var print = function(HTML) {
  console.log(HTML);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
myFunc(requestOptions,print);