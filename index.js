const fs = require("fs");

fs.readFile("employeedepartments.txt", 'utf8', function(err, data) {  
   if (err) throw err;
   
   var newData = data.replace(/INSERT INTO `dept_emp` VALUES/g, "");
   
        var loadDeptArray = newData.split('\n');
     for (var i = 0; i < loadDeptArray.length; i++) {
         if(loadDeptArray[i].slice(28,32) == '9999'){
             console.log(loadDeptArray[i]);
         }

     }

});
//    var textByLine = data.split(",")
//    console.log(textByLine[0]);
//    console.log(textByLine);
// });