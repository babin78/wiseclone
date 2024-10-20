import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { useCollapse } from "react-collapsed";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/favicon.webp";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showRegister, setRegister] = useState(true);

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const openMobileMenu = () => {
    setMobileMenu(true);
    setRegister(false);
  };

  const collapsableHandler = () => {
    // Do more stuff with the click event!
    // Or, set isExpanded conditionally
    setExpanded(!isExpanded);
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
          <li className="menuItem">
            <div className="collapsible">
              <span>Features</span>
              {isExpanded ? (
                <MdOutlineExpandLess onClick={collapsableHandler} />
              ) : (
                <MdOutlineExpandMore onClick={collapsableHandler} />
              )}

              <div {...getCollapseProps()}>
                <div className="content">
                  <span>Send Money</span> <br />
                  <p>
                    Make a one-off payment. You'll get the real exchange rate
                    with the low fee we're known for. Send large amounts
                  </p>
                  <br />
                  <span>Send large amount</span>
                </div>
              </div>
            </div>
          </li>
          <li className="menuItem">Pricing</li>
          <li className="menuItem">Help</li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Header;
