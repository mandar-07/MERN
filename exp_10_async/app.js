const fs = require("fs");

console.log("1. start");

fs.readFile("hello.txt","utf8",(err,data) => {
	console.log("2. File read: ",data);
});

console.log("3. End");
