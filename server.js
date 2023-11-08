const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db", "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);

// Create custom routes for specific resources
server.get("/ratings", (req, res) => {
  // Implement the logic to return ratings data from your JSON file
  const ratings = require(path.join(__dirname, "db", "db.json")).ratings;
  res.json({ ratings });
});

server.get("/lifeQuotes", (req, res) => {
  // Implement the logic to return lifeQuotes data from your JSON file
  const lifeQuotes = require(path.join(__dirname, "db", "db.json")).lifeQuotes;
  res.json({ lifeQuotes });
});

server.use(router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
