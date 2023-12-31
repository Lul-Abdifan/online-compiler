import React from 'react';
import { DarkModeCom } from './DarkMode';
import GoogleAuth from './Authorization/GoogleAuth';
import { auth } from '../src/Config/auth'

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#2c3e50", // Dark background color
    color: "#ecf0f1", // Light text color
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Box shadow for a subtle elevation
  };

  const logoStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#3498db", // Logo color
    textDecoration: "none",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#ecf0f1",
    marginLeft: "10px", // Space between links
  };

  const menuStyle = {
    display: "flex",
    alignItems: "center",
  };

  const menuItemStyle = {
    marginRight: "20px",
  };

 
  return (
    <nav style={navbarStyle}>
      <div className="logo" style={{...logoStyle,display:'flex'}}>
      <DarkModeCom />
        <a href="#" style = {{...linkStyle,marginLeft : "50px"}}>P2P Interview</a>
      </div>
      <div className="menu-item" style={linkStyle}> 
      <h3>MockHub</h3>
      </div>

      <div className="menu" style={menuStyle}>
      <GoogleAuth />
      </div>
    </nav>
  );
};

export default Navbar;
