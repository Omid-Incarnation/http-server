const http = require("http");

const todos = [
  { id: 1, text: "todoOne" },
  { id: 2, text: "todoTwo" },
  { id: 3, text: "todoThree" }
];

const server = http.createServer((req, res) => {
  res.end(
    JSON.stringify({
      success: true,
      data: todos
    })
  );
});

const PORT = 5000;

server.listen(PORT, console.log(`server is running on port: ${PORT}`));
