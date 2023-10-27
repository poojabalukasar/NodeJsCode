const fs = require("fs");

const requrstHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("message.txt", "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>Internal Server Error</h1></body></html>");
        return res.end();
      }

      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write("<body><h2>Messages:</h2><div>");

      data.split("\n").forEach((message) => {
        if (message.trim() !== "") {
          res.write(`<p>${message}</p>`);
        }
      });

      res.write("</div>");
      res.write(
        '<form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.appendFile("message.txt", message + "\n", (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "text/html");
          res.write("<html><body><h1>Internal Server Error</h1></body></html>");
          return res.end();
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>My First Page</title></head>");
  //   res.write("<body><h2>Hello from node js server</h2><div>");
  //   res.write("</html>");
  //   res.end();
};

module.exports = requrstHandler;
