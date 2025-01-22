var fs = require('fs');
// const jsonobject = require('./studentService.js');

// console.log(jsonobject);

var data = {}
data.table = []
for(var i=1; i<=3; i++){
   var obj = {
       id: i,
       studentName: "Riya",
       contactNo:9827465842,
       dob:"24/06/23",
       address: "Anand Nagar, Dahisar(e), Mumbai-400068",
       adharCard:987718378472,
       expiryDate:"9/07/23"
   }
   data.table.push(obj)
}
fs.writeFile ("data.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
