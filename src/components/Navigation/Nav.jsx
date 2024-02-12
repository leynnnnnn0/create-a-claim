import React from 'react'
import "./Nav.css"
import SideBar from '../SideBar/SideBar'
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [show, setShow] = useState(false);
  const handleDisplay = () => setShow(!show);
  return (
    <nav className="navigation-area">
      <CiMenuBurger className="menu-icon" onClick={handleDisplay} />
      {show && <SideBar handleDisplay={handleDisplay} />}
      <div className="logo">
        <Link to={"/home"}>Insured</Link>
      </div>
    </nav>
  );
}

export default Nav