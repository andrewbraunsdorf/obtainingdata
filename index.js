const fs = require("fs");

fs.readFile("departments.txt", 'utf8', function(err, data) {  
   if (err) throw err;
   var textByLine = data.split("\n")
   console.log(textByLine[0]);
   console.log(textByLine);
});