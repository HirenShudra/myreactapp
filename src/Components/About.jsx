import React from "react";
import about from "../Photos/about.avif";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        btnName="Contact Us"
        imgSrc={about}
        visit="/contact"
      />
    </>
  );
};

export default About;
