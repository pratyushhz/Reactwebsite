import React from "react";
// import {NavLink} from "react-router-dom";
import Images from "../src/images/img5.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common 
      name="Welcome to About page"
      imgsrc= {Images} 
      visit="/contact" 
      btname="Contact Now"/>      
    </>
  );
};
export default About;
