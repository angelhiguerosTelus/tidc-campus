const express = require("express");
const app = express();
const server = require("http").createServer(app);

// Example 1 - query
// Shows the parameters that the client send in the url i.g. telus.com/test?firstname=Angel
app.get("/query", (req, res) => {
  const { firstName, lastName } = req.query;
  res.json(req.query);
});

// Example 2 - headers
// Show data about the request
app.get("/headers`", (req, res) => {
  res.json(req.headers);
});

// Example 3 - REST
const sayHello = (req, res) => {
  res.send("Hello word!");
};

const controller = {
  sayHello,
};

app.get("/hello`", controller.sayHello);
app.post("/hello`", controller.sayHello);
app.put("/hello`", controller.sayHello);
app.delete("/hello`", controller.sayHello);


server.listen(3030, () => {
  console.log("Listening on port 3030...");
});
