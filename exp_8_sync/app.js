const fs = require("fs");

console.log("1. Start");

const data = fs.readFileSync("hello.txt","utf8");

console.log("2. File read: ",data);
console.log("3. End");


