import React, { useState } from 'react';
import car1 from './Assets/1.png';
import car2 from './Assets/2.png';
import car3 from './Assets/3.png';
import car4 from './Assets/4.png';
import car5 from './Assets/5.png';

const OurCars = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const carImages = [car1, car2, car3, car4, car5]; 

  const handleNext = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carImages.length);
  };

  const handlePrevious = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex - 1 + carImages.length) % carImages.length);
  };

  return (
    <div className="container mx-w-screen-xl mx-auto mt-32 mb-40">
      <section className='absolute'>
        <h1 className="text-[#1B3E80] text-7xl font-bold">OUR</h1>
        <h1 className="text-black text-7xl font-bold ml-32">CARS</h1>
      </section>
      <div className="flex flex-col items-center mt-8 ml-48">
        <img src={carImages[currentCarIndex]} alt="Car" className="w-80 h-60" /> 
      </div>
      <div className="mt-10 gap-4 mr-96 -ml-96 ">
        <button className="ml-5 left-0 w-10 h-10 bg-[#1B3E80] text-white rounded-full" title="Previous" style={{ transform: 'translateY(-50%)' }} onClick={handlePrevious}>&lt;</button>
        <button className="ml-5 right-0 w-10 h-10 bg-[#1B3E80] text-white rounded-full" title="Next" style={{ transform: 'translateY(-50%)' }} onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default OurCars;
