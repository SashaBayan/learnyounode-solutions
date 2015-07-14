var fs = require('fs');
var path = require('path'); 

//Note: the third argument passed in via CLI (process.argv[3] is the specificed filename

//list is an array of all the files in the directory
fs.readdir(process.argv[2], function(err, list){
  var filteredList = [];

  if(err) console.log(err);
  for (var i = list.length - 1; i >= 0; i--) {
    //find the extname w/o the "."
      //for ex, ".html" will become "html"
    var extension = path.extname(list[i]).slice(1);
    if(extension === process.argv[3]){
      filteredList.push(list[i]);
    }
  };
  for (var j = filteredList.length - 1; j >= 0; j--) {
    console.log(filteredList[j])
  };
});