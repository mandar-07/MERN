const fs = require("fs")

const readStream = fs.createReadStream("input.txt","utf-8");

readStream.on("data",(chunk) => {
	console.log(chunk);
});

readStream.on("end",()=>{
	console.log("Finished reading");
});

readStream.on("error",(err)=>{
	console.log(err);
});
