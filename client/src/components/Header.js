import React from 'react';
import './Header.css'; 



const Header = () => {
  return (
    <header className="header">
      <img src={require("./mina4.jpg")} alt="First Logo" className="logo-left" />
      <h1 className="site-name">مجموعة سان تكلا الكشفيه</h1>
      <img src={require("./mina3.jpg")} alt="Second Logo" className="logo-right" />
    </header>
  );
};

export default Header;
