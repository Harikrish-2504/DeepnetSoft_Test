import axios from "../Utils/axiosInstance";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { createMenu } from "../redux/menu/menuSlice";

const FormComponent = ({isOpen, onClose}) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("item");
  const [itemForm, setItemForm] = useState({name: "", description: "", price: "", menu: ""});
  const [menuForm, setMenuForm] = useState({name: "", description: ""});
  const {menus, loading, error} = useSelector((state) => state.menu);

  if (!isOpen) return null;

  const handleItemChange = (e) => {
    setItemForm({...itemForm, [e.target.name]: e.target.value});
  };

  const handleMenuChange = (e) => {
    setMenuForm({...menuForm, [e.target.name]: e.target.value});
  };

  const submitItem = (e) => {
    e.preventDefault();
    console.log("Item Data:", itemForm);
    axios.post("/items", itemForm);
    onClose();
  };

  const submitMenu = (e) => {
    e.preventDefault();

    dispatch(createMenu(menuForm))
      .unwrap()
      .then((res) => {
        console.log("Menu created successfully:", res);
      })
      .catch((err) => {
        console.error("Failed to create menu:", err);
      });
      onClose();
  };

  return (
    <div className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black/60">
      <div className="bg-[#1e1e1e] text-white rounded-xl w-full max-w-lg p-6 shadow-xl relative">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-white" onClick={onClose}>
          ✕
        </button>

        <div className="flex mb-6 border-b border-gray-600">
          <button
            className={`px-4 py-2 text-sm font-semibold ${
              activeTab === "item" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("item")}
          >
            Add Item
          </button>
          <button
            className={`px-4 py-2 ml-4 text-sm font-semibold ${
              activeTab === "menu" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("menu")}
          >
            Add Menu
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "item" ? (
          <form onSubmit={submitItem} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={itemForm.name}
              onChange={handleItemChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={itemForm.description}
              onChange={handleItemChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={itemForm.price}
              onChange={handleItemChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
              required
            />
            <select
              name="menu"
              value={itemForm.menu}
              onChange={handleItemChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
              required
            >
              <option value="">Select a Menu</option>
              {menus.map((menu) => (
                <option key={menu._id} value={menu._id}>
                  {menu.name}
                </option>
              ))}
            </select>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded">
              Create Item
            </button>
          </form>
        ) : (
          <form onSubmit={submitMenu} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Menu Name"
              value={menuForm.name}
              onChange={handleMenuChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={menuForm.description}
              onChange={handleMenuChange}
              className="w-full bg-gray-800 text-white p-2 rounded"
              required
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded">
              Create Menu
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
