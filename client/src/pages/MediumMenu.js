import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Dropdown.css';

const MediumMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const style = {
    fontFamily: 'Lobster',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const dropdownStyle = {
    position: 'relative',
  };

  const menuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: 'white',
    zIndex: 1,
    width: '100%',
    display: isOpen ? 'block' : 'none', // Show the menu if isOpen is true
  };

  return (
    <div
      className="dropdown"
      style={dropdownStyle}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <button className="dropdown-toggle" style={style}>
        Mediums
      </button>
      <div className="dropdown-menu" style={menuStyle}>
        <ul>
          <Link to="/SculptingPage">
            <li>Sculpture</li>
          </Link>
          <Link to="/PaintingPage">
            <li>Painting</li>
          </Link>
          <Link to="/DigitalArtPages">
            <li>Digital Art</li>
          </Link>
        </ul>
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500"
        rel="stylesheet"
      ></link>
    </div>
  );
};

export default MediumMenu;