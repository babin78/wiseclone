import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/favicon.webp";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showRegister, setRegister] = useState(true);

  const openMobileMenu = () => {
    setMobileMenu(true);
    setRegister(false);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setRegister(true);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} `}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="lineMenu">
          {showRegister && <button className="registerBtn">Register</button>}

          {mobileMenu ? (
            <VscChromeClose onClick={closeMobileMenu} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
        <ul className="menuItems">
          <li className="menuItem">
            <div className="menuFirstButtons">
              <button className="registerBtn active">Personal</button>
              <button className="registerBtn">Business</button>
              <button className="registerBtn">Platform </button>
            </div>
          </li>
          <li className="menuItem">Features</li>
          <li className="menuItem">Pricing</li>
          <li className="menuItem">Help</li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Header;
