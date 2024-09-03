const express = require("express");
const { products } = require("./data"); 

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.send("hello world express server");
  res.send();
});

app.get('/api/v1/test',(req, res) => {
  res.json({ message: "It worked"});
})

app.get('/api/v1/products',(req, res) => {
  res.json({ products : products});
})


app.all('*', (req, res) => {
  res.send('<h2>Page not found</h2>');
})

app.listen("3000", () => {
  console.log("Server running on port: 3000");
});
