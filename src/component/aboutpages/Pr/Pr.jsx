import React from 'react'
import Mainheader from '../../Aboutheader/Mainheader'
import Slider from "react-slick";

import PR1 from '../../../asset/PR.jpg'
import PR2 from '../../../asset/PR.jpg'
import PR3 from '../../../asset/PR.jpg'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  console.log("SamplePrevArrow rendered");
  return (
    <ArrowLeftRoundedIcon 
      onClick={onClick}
      style={{
        color: "var(--yellow)",
        fontSize: "4rem",  // Adjusted size for a more balanced look
        position: "absolute",
        left: "10px",  // Adds some space from the edge
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",  // Added cursor style for better UX
        zIndex: 1  // Ensures the button is above other elements
      }} 
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log("SampleNextArrow rendered");
  return (
    <ArrowRightRoundedIcon
      onClick={onClick}
      style={{
        color: "var(--yellow)",
        fontSize: "4rem",  // Adjusted size for a more balanced look
        position: "absolute",
        right: "10px",  // Adds some space from the edge
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",  // Added cursor style for better UX
        zIndex: 1  // Ensures the button is above other elements
      }} 
    />
  );
}
const Pr = () => {
  const settings = {
   
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true,
    
  };
  return (
    <section className="pr-wrapper bg-[--white] overflow-x-hidden">
      {/* <Mainheader />  */}
     
  <div className='flex items-center justify-center h-[120svh] w-full mx-auto'>
    <img src={PR1} alt="" />
  </div>
  

    </section>
  )
}

export default Pr