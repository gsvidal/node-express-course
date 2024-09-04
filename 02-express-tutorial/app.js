const express = require("express");
const { products } = require("./data");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  // res.send("hello world express server");
  res.send("main page");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked" });
});

app.get("/api/v1/products", (req, res) => {
  res.json({ products: products });
});

app.get("/api/v1/query", (req, res) => {
  console.log("req.query", req.query);
  const character = req.query.search;
  const limit = parseInt(req.query.limit);

  const filteredProducts = products.filter((product) =>
    product.name.startsWith(character)
  );
  if (filteredProducts.length > 0) {
    res.status(200).json({ products: filteredProducts.slice(0, limit) });
  } else {
    res.status(404).json({ message: "There are no products" });
  }
});

app.get("/api/v1/product/:productId", (req, res) => {
  const id = Number(req.params.productId);
  console.log("req.params", req.params);
  const product = products.find((product) => product.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "No product with that id" });
  }
});

app.all("*", (req, res) => {
  res.send("<h2>Page not found</h2>");
});

app.listen("3000", () => {
  console.log("Server running on port: 3000");
});
