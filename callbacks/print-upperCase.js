var getHTML = require('../printHTMLWithCallback');

function printLowerCase(html){
  let modified = html.toLowerCase();
  console.log(modified);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions,printLowerCase);