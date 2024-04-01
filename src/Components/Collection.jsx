import React from "react";
import img1 from './Assets/1.png';
import img2 from './Assets/2.png';
import img3 from './Assets/3.png';
import img4 from './Assets/4.png';
import img5 from './Assets/5.png';
import img6 from './Assets/6.png';
import img7 from './Assets/7.png';
import img8 from './Assets/8.png';

const Collection = () => {
  return (
    <div className="container mx-w-screen-xl mx-auto px-4 ">
      <section className=" mt-32 mb-32 px-32">
        <h1 className="mr-20 text-[#1B3E80] text-5xl font-bold ">
          BMW Collections
        </h1>
        <div className="grid grid-rows-3 grid-flow-col gap-4 mt-32">
          <div><img src={img1}/></div>
          <div><img src={img2}/></div>
          <div><img src={img3}/></div>
          <div><img src={img4}/></div>
          <div className="grid grid-rows-subgrid gap-4 row-span-2">
            <div className="row-start-2"><img src={img5}/></div>
          </div>
          <div><img src={img6}/></div>
          <div><img src={img7}/></div>
          <div><img src={img8}/></div>
        
        </div>
      </section>
    </div>
  );
};

export default Collection;
