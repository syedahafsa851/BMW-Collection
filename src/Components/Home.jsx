import React from 'react';
import Header from './Header';
import CarModel from "./CarModel";
import About from "./About";
import Videos from "./Videos";
import OurCars from "./OurCars";
import Collection from "./Collection";
import BMWForever from "./BMWForever";

const Home = () => {
  return (
    <div className="text-center justify-center items-center">
      <Header />
        <CarModel />
        <About />
        <Videos />
        <OurCars />
        <Collection />
        <BMWForever />
    </div>
  )
}


export default Home;
