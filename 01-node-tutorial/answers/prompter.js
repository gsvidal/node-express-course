const http = require("http");
const StringDecoder = require("string_decoder").StringDecoder;

// List to store submitted items
let items = [];

// Function to parse the request body
const getBody = (req, callback) => {
  const decoder = new StringDecoder("utf-8");
  let body = "";
  req.on("data", (data) => {
    body += decoder.write(data);
  });
  req.on("end", () => {
    body += decoder.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Function to generate the HTML form and items
const form = () => {
  console.log("form: ", items)
  // Generate HTML for all items
  const itemsHtml = items.map(item => `<li>${item}</li>`);

  return `
  <body>
    <h1>Item List 6th</h1>
    <ul>
      ${itemsHtml}
    </ul>
    <form method="POST">
      <input name="item" required></input>
      <button type="submit">Submit</button>
    </form>
  </body>
  `;
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);

  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // Add new item to the list
      if (body["item"]) {
        items.push(decodeURIComponent(body["item"]));
      } else {
        items.push("Nothing was entered.");
      }
      // Redirect to the main page
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form());
  }
});

// Start the server
server.listen(3000, () => {
  console.log("The server is listening on port 3000..");
});
