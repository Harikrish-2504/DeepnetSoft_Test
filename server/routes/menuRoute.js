const express = require("express");
const router = express.Router();
const {createMenu, getMenuWithItems, getAllMenus} = require("../controller/menuController");

router.post("/", createMenu);
router.get("/:menuId", getMenuWithItems);
router.get("/", getAllMenus);
module.exports = router;
