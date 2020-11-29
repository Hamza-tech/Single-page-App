import React from "react";
import web from "../src/Images/about1.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";



const About =() =>{ 
  return (
    <>
    <Common 
    name="Welcome to About Page" 
    imgsrc={web}
     visit="/contact"
      btname="Contact now" />
     </>
  )
}
export default About;