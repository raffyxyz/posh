import React from "react";
import Hero from "../Components/Hero";
import Companies from "../Components/Companies";
import Guide from "../Components/Guide";
import Properties from "../Components/Properties";
import Details from "../Components/Details";
import Testimonials from "../Components/Testimonials";
import GetStarted from "../Components/GetStarted";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Guide />
      <Properties />
      <Details />
      <Testimonials />
      <GetStarted />
    </>
  );
};

export default HomePage;
