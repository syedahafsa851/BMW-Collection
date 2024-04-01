import React from "react";
import ReactPlayer from "react-player";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import video1 from "./Videos/video1.mp4";
import video2 from "./Videos/video2.mp4";
import video3 from "./Videos/video3.mp4";
import video4 from "./Videos/video4.mp4";

const Videos = () => {
  
  return (
    <div className="container mx-w-screen-xl mx-auto px-4 ">
      <section className=" mt-20 mb-20">
        <h1 className="mr-20 text-[#1B3E80] text-5xl font-bold ">Our Videos</h1>

        <div className="justify-center items-center mt-10 px-64">
          <AwesomeSlider>
            <div >
              <ReactPlayer
                light={true}
                controls={true}
                url={video1}
                height={450}
                width={750}
              />
            </div>

            <div >
              <ReactPlayer
                light={true}
                controls={true}
                url={video2}
                height={450}
                width={750}
              />
            </div>

            <div >
              <ReactPlayer
                light={true}
                controls={true}
                url={video3}
                height={450}
                width={750}
              />
            </div>

            <div >
              <ReactPlayer
                light={true}
                controls={true}
                url={video4}
                height={450}
                width={750}
              />
            </div>
          </AwesomeSlider>
        </div>
      </section>
    </div>
  );
};

export default Videos;
