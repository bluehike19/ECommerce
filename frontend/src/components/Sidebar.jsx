import React from "react";
import { FaTimes } from "react-icons/fa";

import { useGlobalContext } from "../context/Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
