import React from "react";
import web from "../src/Images/Home1.svg"
import { NavLink } from "react-router-dom";
import Common from "./Common";



const Home =() =>{ 
  return (
    <>
    <Common 
    name="Grow Your Bussines with" 
    imgsrc={web}
     visit="/service"
      btname="Get Started"
      />
     </>
  )
}
export default Home;