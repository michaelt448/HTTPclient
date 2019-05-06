var getHTML = require('../printHTMLWithCallback');

function reverse(html){
  let result = '';
  let i = html.length;
while(i > 0){
  result += html.charAt(i);
  i--;
  }
  console.log(result);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions,reverse);