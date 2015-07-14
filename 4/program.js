var fs = require('fs');

//you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a String instead of a Buffer.
fs.readFile(process.argv[2], 'utf8', function(err, data){
  if(err) console.log("ERROR: ", err)
  console.log(data.split('\n').length - 1);
});