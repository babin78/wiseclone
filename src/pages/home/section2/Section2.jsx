import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import ReactPlayer from "react-player/lazy";
import "./style.scss";

const Section2 = () => {
  return (
    <ContentWrapper>
      <div className="section2">
        <ReactPlayer
          className="vdPlayer"
          url="https://www.youtube.com/watch?v=7whUKWQ-uSg"
          playing={true}
          loop={true}
        />
      </div>
    </ContentWrapper>
  );
};

export default Section2;
