import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Container from "./container";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Container />
      <Footer />
    </>
  );
};

export default Home;