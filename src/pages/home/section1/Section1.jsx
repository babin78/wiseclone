import React from "react";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import ReactPlayer from "react-player/lazy";
const Section1 = () => {
  return (
    <ContentWrapper>
      <div className="section1">
        <span className="title">Save when you send worldwide</span>
        <br />
        <span className="subTitle">
          Get your money moving internationally. Save on hidden fees when you
          send with Wise.
        </span>
        <br />
        <ul className="navList">
          <li className="navItem">
            <a className="navBTN active" href="">
              Send Money now
            </a>
          </li>
          <li className="navItem">
            <a className="navBTN" href="">
              Open an account
            </a>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  );
};

export default Section1;
