import React, { useState } from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useCollapse } from "react-collapsed";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";

import "./style.scss";

const MenuPopUP = ({ show, setShow }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  const collapsableHandler = () => {
    // Do more stuff with the click event!
    // Or, set isExpanded conditionally
    setExpanded(!isExpanded);
  };

  return (
    <ContentWrapper>
      <div className="menuPopup">
        <ul className="menuItems">
          <li className="menuItem">
            <ul className="navList">
              <li className="navItem">
                <a className="navBTN active" href="">
                  Personal
                </a>
              </li>
              <li className="navItem">
                <a className="navBTN" href="">
                  Bussiness
                </a>
              </li>
              <li className="navItem">
                <a className="navBTN" href="">
                  Platform
                </a>
              </li>
            </ul>
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
      </div>
    </ContentWrapper>
  );
};

export default MenuPopUP;
