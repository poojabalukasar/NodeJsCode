// Assignment Question

// Q.8

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title></head>");
//     res.write(
//       '<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }
//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       const parseBody = Buffer.concat(body).toString();
//       const message = parseBody.split("=")[1];
//       console.log(message);
//       fs.writeFileSync("message.txt", message, (error) => {
//         if (error) {
//           console.log(error);
//         }
//       });
//     });

//     res.statusCode = 302;
//     res.setHeader("location", "/");
//     return res.end();
//   }
// });

// server.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });

// What is the use of having buffers and streams? When would you use it?.
//Answer :
//Buffers: we use buffers when we need to work with binary data, such as
// reading or writing files.
//Buffers are especially useful when we want to perform operations on data in chunks, like encryption or compression,
// before saving it to a file or sending it over the network.

//Streams: Streams are valuable for processing data in a continuous and non-blocking manner.
//They are crucial in situations where we want to read or write data in small chunks,
// making them ideal for handling large files, streaming media (audio or video), processing real-time data
// from sources like sensors or log files, and handling network communication with minimal memory usage and improved performance.

//Chat app demo

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
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
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// <-------------------><------------------><------------->------------><-----------------><----------------><-------->
