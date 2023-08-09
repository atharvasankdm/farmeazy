import { Divider } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import About from "../components/About";
import HomeHero from "../components/HomeHero";
import HomeNavbar from "../components/HomeNavbar";
import kommunicateChat from "../KommunicateChat";

const MainHomePage = () => {
  useEffect(() => {
    const fetchHello = async () => {
      const response = await fetch("http://localhost:8000");
      console.log(await response.json());
    };
    fetchHello();
  }, []);

  return (
    <>
      <HomeNavbar />
      <HomeHero />
      <Divider />
      <About />
      <kommunicateChat />
    </>
  );
};

export default MainHomePage;
