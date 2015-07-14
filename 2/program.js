//create an array of arguments that come after the node process and the path
//for example, node path/to/file 1 2 3
  //this will only grab 1 2 3 and put them in an array
var args = process.argv.slice(2);

console.log(sum(stringsToNums(args)));


//convert strings to numbers
function stringsToNums(arrOfNums){
  for (var i = args.length - 1; i >= 0; i--) {
    args[i] = Number(args[i]);
  };
  return arrOfNums;
}

//sum up the numbers
function sum(arrOfNums){
  var total = 0;
  for (var i = args.length - 1; i >= 0; i--) {
    total += arrOfNums[i];
  };
  return total;
}
