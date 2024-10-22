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
          url="https://wise.com//static-assets/app/_next/static/media/3d-globe-cfe618f7f706583422789cd9773a062a.mp4"
          playing={true}
          controls={true }
          muted={true}
          loop={true}
        />
      </div>
    </ContentWrapper>
  );
};

export default Section2;
