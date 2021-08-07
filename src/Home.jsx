import React from "react";
import Images from "../src/images/img3.jpg";
// import {NavLink} from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common 

      name="Create your Roadmap " 
      brand="With Us"
      field="Front End Developer"
      imgsrc={Images}
      visit="/service"
      btname="Get Started"
      />
    </>
  );
};
export default Home;
