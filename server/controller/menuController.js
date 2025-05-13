const Menu = require("../models/menuModel");

exports.createMenu = async (req, res) => {
  try {
    const {name, description} = req.body;
    const newMenu = new Menu({name, description});
    await newMenu.save();
    res.status(201).json({success: true, data: newMenu});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
};
exports.getMenuWithItems = async (req, res) => {
  try {
    const { menuId } = req.params;

    const menu = await Menu.findById(menuId).populate("items");

    if (!menu) {
      return res.status(404).json({ success: false, message: "Menu not found" });
    }

    res.status(200).json({ success: true, data: menu });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find(); 
    res.status(200).json({ success: true, data: menus });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
