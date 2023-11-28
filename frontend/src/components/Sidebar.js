import React from 'react';
import './Sidebar.css';
import DarkModeToggle from './DarkModeToggle';

function Sidebar() {
    return (
      <nav className="sidebar-class">
<DarkModeToggle className="dark-mode-button" />
        {/* Sidebar content here */}
      </nav>
    );
  }


  export default Sidebar;
  