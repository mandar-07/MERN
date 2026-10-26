const http = require("http");

const users = [
  { id: 1, name: "Soham", age: 21 },
  { id: 2, name: "Rahul", age: 22 }
];

const server = http.createServer((req, res) => {

  console.log(`${req.method} ${req.url}`);

  // Common response header
  res.setHeader("Content-Type", "application/json");

  // Log request headers
  console.log("User-Agent:", req.headers["user-agent"]);

  // Home route
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;

    res.end(JSON.stringify({
      message: "Welcome to the API"
    }));

    return;
  }

  // GET /users
  if (req.method === "GET" && req.url === "/users") {
    res.statusCode = 200;

    res.end(JSON.stringify(users));

    return;
  }

  // POST /users
  if (req.method === "POST" && req.url === "/users") {

    let body = "";

    // Request body arrives in chunks
    req.on("data", chunk => {
      body += chunk;
    });

    // Body completely received
    req.on("end", () => {

      try {
        const user = JSON.parse(body);

        user.id = users.length + 1;

        users.push(user);

        res.statusCode = 201;

        res.end(JSON.stringify({
          message: "User created",
          user: user
        }));

      } catch (error) {

        res.statusCode = 400;

        res.end(JSON.stringify({
          error: "Invalid JSON"
        }));
      }
    });

    return;
  }

  // Unknown route
  res.statusCode = 404;

  res.end(JSON.stringify({
    error: "Route not found"
  }));
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});