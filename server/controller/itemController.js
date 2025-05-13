const Item = require("../models/itemModel");
const Menu = require("../models/menuModel");

exports.createItem = async (req, res) => {
  try {
    const {name, description, price, menu} = req.body;

    const existingMenu = await Menu.findById(menu);
    if (!existingMenu) {
      return res.status(404).json({success: false, message: "Menu not found"});
    }

    const newItem = new Item({name, description, price, menu});
    await newItem.save();

    existingMenu.items.push(newItem._id);
    await existingMenu.save();

    res.status(201).json({success: true, data: newItem});
  } catch (err) {
    res.status(500).json({success: false, message: err.message});
  }
};
