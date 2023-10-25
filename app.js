// Assignment Question

// Q.8

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"> <input type="text" name="message"><button>Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "new data added");
    res.statusCode = 302;
    return res.end();
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// <-------------------><------------------><------------->------------><-----------------><----------------><-------->
