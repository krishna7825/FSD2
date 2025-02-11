const fs = require('fs');
const data = " I am new data  "
fs.readFile("./data.txt","utf8",data,(err)=>{
    if(err) throw err;
    console.log("file created successfully!:");
})