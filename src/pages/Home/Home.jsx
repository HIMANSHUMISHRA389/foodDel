/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Explore from "../../components/explore/Explore";
import { Context } from "../../context/context";
import Food from "../../components/foods/Food";
import Footer from "../../components/footer/Footer";
import Download from "../../components/Download/Download";

const Home = () => {
  const [cat, setCat] = useState(null);

  return (
    <>
      <Navbar />
      <Header />
      <Explore setcat={setCat} />
      <Food category={cat} />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
