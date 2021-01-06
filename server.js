const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const viewRoutes = require("./routes/viewRoutes");

dotenv.config({ path: "./config.env" });

const app = express();

// Middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

if (process.env === "development") {
  app.use(morgan("dev"));
}

// Mount routes
app.get("/", async (req, res) => {
  res.render("login");
});

app.use("/", viewRoutes);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
