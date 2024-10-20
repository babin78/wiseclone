import React, { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import MenuPopUP from "../Popup/MenuPopUP";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/favicon.webp";

import "./style.scss";

const Header = () => {
  // const [show, setShow] = useState("top");

  const [showPopup, setShowPopup] = useState(false);
  const [showRegister, setRegister] = useState(true);

  const openPopup = () => {
    setShowPopup(true);
    setRegister(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    setRegister(true);
  };

  return (
    <ContentWrapper>
      <header className={`header `}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="lineMenu">
          {showRegister && <button className="registerBtn">Register</button>}

          {showPopup ? (
            <VscChromeClose onClick={closePopup} />
          ) : (
            <SlMenu onClick={openPopup} />
          )}
        </div>
      </header>
      {showPopup && <MenuPopUP show={showPopup} />}
    </ContentWrapper>
  );
};

export default Header;
