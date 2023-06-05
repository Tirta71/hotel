import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TabDining() {
  const [activeTab, setActiveTab] = useState("tab-breakfast");
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://647c5a8bc0bae2880ad09b73.mockapi.io/makanan"
      );
      setTabData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tab-container">
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
            Desserts
          </a>
        </li>
      </ul>
      {Object.keys(tabData).map((tabId) => (
        <div
          key={tabId}
          id={tabId}
          className={`tab-content ${activeTab === tabId ? "tab-active" : ""}`}
        >
          {activeTab === tabId &&
            tabData[tabId].map((item, index) => (
              <div className="dinning-menu-item" key={index}>
                <div className="image">
                  <a
                    href={item.image}
                    data-fancybox="breakfast-gallery"
                    data-caption={item.caption}
                  >
                    <img src={item.image} alt="" />
                    <span className="mdi mdi-eye"></span>
                  </a>
                </div>
                <div className="text">
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                </div>
                <div className="price">
                  <strong>
                    Rp. {item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </strong>

                  <p>{item.serving}</p>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
