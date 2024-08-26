const express = require("express");
const {
  homepage,
  categoryPage,
  newsDetailsPage,
} = require("../controllers/controllers");

const router = express.Router();

router.get("/", homepage);
router.get("/category/:name", categoryPage);
router.get("/news/:id", newsDetailsPage);

module.exports = router;
