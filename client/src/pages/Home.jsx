import React from "react";
import Hero from "../components/Hero";
import FeaturedDestination from "../components/FeaturedDestination";
import ExclusiceOffers from "../components/ExclusiceOffers";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiceOffers />
      <Testimonials />
      <NewsLetter />
    </>
  );
};

export default Home;
