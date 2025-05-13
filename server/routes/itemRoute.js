const express = require("express");
const router = express.Router();
const {createItem} = require("../controller/itemController");

router.post("/", createItem); // POST /api/items

module.exports = router;
