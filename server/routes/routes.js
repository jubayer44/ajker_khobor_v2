const express = require("express");
const { homepage, categoryPage } = require("../controllers/controllers");

const router = express.Router();

router.get("/", homepage);
router.get("/category/:name", categoryPage);

module.exports = router;
