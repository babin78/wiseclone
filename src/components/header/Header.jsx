import  { useState} from "react";
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

        <ul className="navList">
              <li className="navItem">
                <a className="navBTN active" href="/">
                  Personal
                </a>
              </li>
              <li className="navItem">
                <a className="navBTN" href="/">
                  Bussiness
                </a>
              </li>
              <li className="navItem">
                <a className="navBTN" href="/">
                  Platform
                </a>
              </li>
            </ul>



        <ul className="menuItems">
        <li className="menuItem">
           
              <div className="toolTip">Features
              <div className="tooltiptext">
              <span>Send Money</span> <br />
                  <p>
                    Make a one-off payment. You&apos;ll get the real exchange rate
                    with the low fee we&apos;re known for. Send large amounts
                  </p>
                  <br />
                  <span>Send large amount</span>
                
              </div>

              </div>
              
            
          </li>
          <li className="menuItem"> <a  href="">
                  Priceing
                </a></li>
                <li className="menuItem"> <a  href="">
                  Help
                </a></li>
        
        </ul>
            
            
        <div className="lineMenu">
          {showRegister && <button className="registerBtn">Register</button>}
          {showPopup ? (
                  <VscChromeClose onClick={closePopup} />
                ) : (
                  <SlMenu onClick={openPopup} />
                )
              }

         
        </div>

        
      </header>
      {showPopup && <MenuPopUP show={showPopup} />}
    </ContentWrapper>
  );
};

export default Header;
