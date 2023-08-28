import React from "react";
import Navbaar from "./Navbaar";
import Home from "./Home";
import BGImage from "../assest/bg-img.png";

const Introduction = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${BGImage})` }}>
        <Navbaar />
        <Home />
      </div>
    </div>
  );
};

export default Introduction;
