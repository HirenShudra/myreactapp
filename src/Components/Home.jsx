import React from "react";
import Common from "./Common";
import web from "../Photos/web.avif";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        btnName="Get Started"
        imgSrc={web}
        visit="/service"
      />
    </>
  );
};

export default Home;
