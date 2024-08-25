const express = require("express");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
const router = require("./server/routes/routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(expressLayouts);

app.set("layout", "layouts/main");
app.set("view engine", "ejs");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
