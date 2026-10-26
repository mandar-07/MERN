const http = require("http");

const server = http.createServer((req,res)=>{
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  res.end("Request received");
  res.end("Hello from Node.js");
})

server.listen(3000,()=>{
  console.log("Server running on http://localhost:3000")
})
