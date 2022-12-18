import React from "react";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
