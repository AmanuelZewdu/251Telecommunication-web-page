import React, { useRef, useState } from 'react'
import Addis from '../../asset/Addis.jpg'
import Fantish from '../../asset/fantish.jpg'
import Mission from '../../asset/Mission.png'
import Vision from '../../asset/Vision.png'
import Values from '../../asset/Values.png'
import Slider from "react-slick";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
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
const Abouthero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true,
    
  };

    const teamMembers = [
    { id: 1, name: 'Addis', imgSrc: Addis, role: 'CEO', 
    description: 'AS CEO OF \"251 COMMUNICATION AND MARKETING PLC,\" FANTISH DRIVES THE COMPANY\'S VISION AND GROWTH, ENSURING ALL OPERATIONS ALIGN WITH ITS STRATEGIC OBJECTIVES AND LONG-TERM SUCCESS.'
 },
    { id: 2, name: 'Fantish', imgSrc: Fantish, role: 'CEO', description: 'AS CEO OF \"251 COMMUNICATION AND MARKETING PLC,\" FANTISH DRIVES THE COMPANY\'S VISION AND GROWTH, ENSURING ALL OPERATIONS ALIGN WITH ITS STRATEGIC OBJECTIVES AND LONG-TERM SUCCESS.'
 },
    { id: 3, name: 'Addis', imgSrc: Addis, role: 'CEO', description: 'AS CEO OF \"251 COMMUNICATION AND MARKETING PLC,\" FANTISH DRIVES THE COMPANY\'S VISION AND GROWTH, ENSURING ALL OPERATIONS ALIGN WITH ITS STRATEGIC OBJECTIVES AND LONG-TERM SUCCESS.'
 },
    { id: 4, name: 'Fantish', imgSrc: Fantish, role: 'CEO',description: 'AS CEO OF \"251 COMMUNICATION AND MARKETING PLC,\" FANTISH DRIVES THE COMPANY\'S VISION AND GROWTH, ENSURING ALL OPERATIONS ALIGN WITH ITS STRATEGIC OBJECTIVES AND LONG-TERM SUCCESS.'
},
    { id: 5, name: 'Addis', imgSrc: Addis, role: 'CEO', description: 'AS CEO OF \"251 COMMUNICATION AND MARKETING PLC,\" FANTISH DRIVES THE COMPANY\'S VISION AND GROWTH, ENSURING ALL OPERATIONS ALIGN WITH ITS STRATEGIC OBJECTIVES AND LONG-TERM SUCCESS.'
 },
    { id: 6, name: 'Fantish', imgSrc: Fantish, role: 'CEO', description: 'AS CEO OF \"251 COMMUNICATION AND MARKETING PLC,\" FANTISH DRIVES THE COMPANY\'S VISION AND GROWTH, ENSURING ALL OPERATIONS ALIGN WITH ITS STRATEGIC OBJECTIVES AND LONG-TERM SUCCESS.'
 },
  ];
  const [selectedMember, setSelectedMember] = useState(null);
 
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

    const closeCard = () => {
    setSelectedMember(null);
  };
  return (
   <section className="about-wrapper">
    <div className="about-container p-[40px] px-[80px]">
    <div className="team-container flex flex-col">
     {!selectedMember && (

      <div className="flex-col">
        <h1 className="text-[4rem] text-[--white] font-[700]">MEET OUR TEAM</h1>
        <h3 className="text-[2rem] text-[--yellow] font-[700]">THE TEAM IS OUR GREATEST ASSET</h3>
      </div>
       )
     }

      <div className="flex flex-col mt-16">
        <h3 className="text-[2rem] text-[--white] font-[500]">TEAM</h3>
        <div className="image-container flex mt-10 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col gap-2 items-center p-0 m-0 cursor-pointer"
              onClick={() => handleMemberClick(member)}
            >
              <img src={member.imgSrc} alt={member.name} className="w-[100%] rounded-[50%]" />
              <span className="text-[--white] text-[1.3rem] font-[700]">{member.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Conditional rendering of the selected member card */}
      {selectedMember && (
        <div className="absolute top-0 left-0 w-full px-20  h-full flex justify-center items-center bg-[--black-opacity]">
          <div className="bg-[black] relative border-solid border-[1px] border-[--white] flex gap-8  p-8 rounded-lg">
           <div className=''>
            <h2 className="text-[2rem] text-[--yellow] font-[700]">{selectedMember.name}</h2>
            <p className="text-[1.5rem] text-[--white]">{selectedMember.role}</p>
          </div>
           <div className="border-[1px] border-[--white] h-auto"></div>
           <p className='text-[1rem] text-[--white]'>{selectedMember.description}</p>
            <button onClick={closeCard} className="text-[--white] absolute top-0 right-0 p-2 px-4">x</button>
          </div>
        </div>
      )}
    </div>
      </div>

      <div className="mission-container flex flex-col items-center justify-center p-10 mt-20">
        <div className='w-[50%]'>
        <img src={Mission} alt="mission" className='w-[100%]' />
        <div className='text-[--yellow] mt-[10%]'>
        <Slider {...settings} className='flex items-center justify-between px-[3rem]'>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
</Slider>
</div>
        </div>
      
    </div>

    <div className="vision-container flex flex-col items-center justify-center p-10 mt-20">
        <div className='w-[50%]'>
        <img src={Vision} alt="mission" className='w-[100%]' />
        <div className='text-[--yellow] mt-[10%]'>
        <Slider {...settings} className='flex items-center justify-between px-[3rem]'>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
</Slider>
</div>
        </div>
      
    </div>

    <div className="values-container flex flex-col items-center justify-center p-10 mt-20">
        <div className='w-[50%]'>
        <img src={Values} alt="mission" className='w-[100%]' />
        <div className='text-[--yellow] mt-[10%]'>
        <Slider {...settings} className='flex items-center justify-between px-[3rem]'>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
  <div className='flex items-center justify-center w-full mx-auto'>
    <h3 className='text-[--yellow] text-center max-w-[600px]'>
      To provide a second to none marketing service to our customers
    </h3>
  </div>
</Slider>
</div>
        </div>
      
    </div>


   </section>
  )
}

export default Abouthero;