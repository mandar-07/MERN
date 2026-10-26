const fs = require("fs")

if(!fs.existsSync("myFolder")){
	fs.mkdirSync("myFolder");
	console.log("Directory handling");
}

fs.mkdirSync("parent/child/grandchild",{recursive:true});

console.log("Directory created");

const files = fs.readdirSync(".");

console.log(files);

fs.appendFileSync("hello.txt", "\nThis is another line.");
