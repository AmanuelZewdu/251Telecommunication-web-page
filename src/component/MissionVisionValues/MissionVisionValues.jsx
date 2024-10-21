import React from "react";
import Slider from "react-slick"; // Assuming you have 'react-slick' installed
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Mission from '../../asset/Mission.png'
import Vision from '../../asset/Vision.png'
import Values from '../../asset/Values.png'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true, // Enable next/previous arrows
  autoplay: true, // Optional, for automatic sliding
  autoplaySpeed: 3000,
};

const MissionVisionValues = () => {
  return (
    <div className="mission-vision-values-container flex flex-col items-center justify-center p-2 md:p-10 mt-20">
      <div className="w-[80%]">
        <Slider {...settings}>
          {/* Mission Slide */}
          <div className="flex flex-col items-center justify-center w-full">
            <img src={Mission} alt="mission" className="w-[100%]" />
            <div className="text-[--yellow] mt-5">
              <ul className="list-none text-center max-w-[600px] mx-auto">
                <li>To provide a second to none marketing service to our customers</li>
                <li>Delivering excellent customer experience</li>
                <li>High customer satisfaction</li>
              </ul>
            </div>
          </div>

          {/* Vision Slide */}
          <div className="flex flex-col items-center justify-center w-full">
            <img src={Vision} alt="vision" className="w-[100%]" />
            <div className="text-[--yellow] mt-5">
              <ul className="list-none text-center max-w-[600px] mx-auto">
                <li>Becoming a global leader in marketing services</li>
                <li>Revolutionizing the industry with innovation</li>
                <li>Providing unmatched customer value</li>
              </ul>
            </div>
          </div>

          {/* Values Slide */}
          <div className="flex flex-col items-center justify-center w-full">
            <img src={Values} alt="values" className="w-[100%]" />
            <div className="text-[--yellow] mt-5">
              <ul className="list-none text-center max-w-[600px] mx-auto">
                <li>Integrity in all we do</li>
                <li>Honesty and transparency</li>
                <li>Customer-centric approach</li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MissionVisionValues;
