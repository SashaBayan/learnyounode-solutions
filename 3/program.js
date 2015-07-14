var fs = require('fs');

var text = fs.readFileSync(process.argv[2]);

console.log(countLines(text));

function countLines(text){
  var text = text.toString();
  var lines = text.split('\n');
  return lines.length - 1;
}