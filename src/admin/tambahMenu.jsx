import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddMenuItem() {
  const [activeTab, setActiveTab] = useState("tab-breakfast");
  const [menuItem, setMenuItem] = useState({
    name: "",
    description: "",
    price: "",
    serving: "",
    image: "",
    caption: "",
  });
  const [menuData, setMenuData] = useState({
    "tab-breakfast": [],
    "tab-starters": [],
    "tab-main-course": [],
    "tab-soups": [],
    "tab-desserts": [],
  });
  const [editIndex, setEditIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/makanan/1"
      );
      const data = response.data;

      setMenuData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (editIndex !== null) {
        // Update existing menu item
        handleUpdate();
      } else {
        // Add new menu item
        const updatedTabData = [...menuData[activeTab], menuItem];
        const updatedMenuData = {
          ...menuData,
          [activeTab]: updatedTabData,
        };

        await axios.put(
          "https://647c5a8bc0bae2880ad09b73.mockapi.io/makanan/1",
          updatedMenuData
        );

        console.log("Menu item added successfully");
        setMenuData(updatedMenuData);
        fetchData(); // Refresh data
      }

      setMenuItem({
        name: "",
        description: "",
        price: "",
        serving: "",
        image: "",
        caption: "",
      });
      setEditIndex(null);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setIsLoading(true);
      const updatedTabData = [...menuData[activeTab]];
      updatedTabData[editIndex] = menuItem;
      const updatedMenuData = {
        ...menuData,
        [activeTab]: updatedTabData,
      };

      await axios.put(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/makanan/1",
        updatedMenuData
      );

      console.log("Menu item updated successfully");
      setMenuData(updatedMenuData);
      fetchData(); // Refresh data
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleEdit = (tabId, index) => {
    const itemToEdit = menuData[tabId][index];
    setMenuItem(itemToEdit);
    setEditIndex(index);
  };

  const handleDelete = async (tabId, index) => {
    try {
      setIsLoading(true);
      const updatedTabData = [...menuData[tabId]];
      updatedTabData.splice(index, 1);
      const updatedMenuData = {
        ...menuData,
        [tabId]: updatedTabData,
      };

      await axios.put(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/makanan/1",
        updatedMenuData
      );

      console.log("Menu item deleted successfully");
      setMenuData(updatedMenuData);
      fetchData(); // Refresh data
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuItem((prevMenuItem) => ({
      ...prevMenuItem,
      [name]: value,
    }));
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div style={{ margin: "0 10rem" }}>
      <h2>Add New Menu Item</h2>
      <h3>{activeTab}</h3>
      <ul className="tabs clearfix">
        <li>
          <a
            href="#tab-breakfast"
            className={activeTab === "tab-breakfast" ? "tab-link-active" : ""}
            onClick={() => handleTabClick("tab-breakfast")}
          >
            Breakfast
          </a>
        </li>
        <li>
          <a
            href="#tab-starters"
            className={activeTab === "tab-starters" ? "tab-link-active" : ""}
            onClick={() => handleTabClick("tab-starters")}
          >
            Starters
          </a>
        </li>
        <li>
          <a
            href="#tab-main-course"
            className={activeTab === "tab-main-course" ? "tab-link-active" : ""}
            onClick={() => handleTabClick("tab-main-course")}
          >
            Main Course
          </a>
        </li>
        <li>
          <a
            href="#tab-soups"
            className={activeTab === "tab-soups" ? "tab-link-active" : ""}
            onClick={() => handleTabClick("tab-soups")}
          >
            Soups
          </a>
        </li>
        <li>
          <a
            href="#tab-desserts"
            className={activeTab === "tab-desserts" ? "tab-link-active" : ""}
            onClick={() => handleTabClick("tab-desserts")}
          >
            Dessert
          </a>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={menuItem.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={menuItem.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={menuItem.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Serving:
          <input
            type="text"
            name="serving"
            value={menuItem.serving}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={menuItem.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Caption:
          <input
            type="text"
            name="caption"
            value={menuItem.caption}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {editIndex !== null ? "Update" : "Add"} Menu Item
        </button>
      </form>
      <button onClick={handleCancel}>Cancel / Clear</button>

      {menuData[activeTab] && (
        <div className="menu-list">
          <h3>{activeTab}</h3>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul style={{ display: "flex", gap: "5rem" }}>
              {menuData[activeTab].map((item, index) => (
                <li
                  key={index}
                  style={{ listStyle: "none ", textAlign: "center" }}
                >
                  <div>{item.name}</div>
                  <button onClick={() => handleEdit(activeTab, index)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(activeTab, index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
