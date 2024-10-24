// import React, { useRef, useState } from 'react'
// import Addis from '../../asset/Addis.jpg'
// import Bamlak from '../../asset/Bamlak.png'
// import Jhon from '../../asset/Jhon.png'
// import Naod from '../../asset/Naod.png'

// import Michael from '../../asset/Michael.png'
// import Biniam from '../../asset/Biniam.png'
// import Fantish from '../../asset/fantish.png'
// import Mission from '../../asset/Mission.png'
// import Vision from '../../asset/Vision.png'
// import Values from '../../asset/Values.png'
// import Slider from "react-slick";
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
// import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
// import Expermental from '../aboutpages/expermental/Expermental';
// import MissionVisionValues from '../../component/MissionVisionValues/MissionVisionValues';



// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   console.log("SamplePrevArrow rendered");
//   return (
//     <ArrowLeftRoundedIcon 
//       onClick={onClick}
//       style={{
//         color: "var(--yellow)",
//         fontSize: "4rem",  // Adjusted size for a more balanced look
//         position: "absolute",
//         left: "10px",  // Adds some space from the edge
//         top: "50%",
//         transform: "translateY(-50%)",
//         cursor: "pointer",  // Added cursor style for better UX
//         zIndex: 1  // Ensures the button is above other elements
//       }} 
//     />
//   );
// }

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   console.log("SampleNextArrow rendered");
//   return (
//     <ArrowRightRoundedIcon
//       onClick={onClick}
//       style={{
//         color: "var(--yellow)",
//         fontSize: "4rem",  
//         position: "absolute",
//         right: "10px",  // Adds some space from the edge
//         top: "50%",
//         transform: "translateY(-50%)",
//         cursor: "pointer",  // Added cursor style for better UX
//         zIndex: 1  // Ensures the button is above other elements
//       }} 
//     />
//   );
// }
// const Abouthero = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     speed: 2000,
//     autoplaySpeed: 3000,
//     autoplay: true,
    
//   };

//     const teamMembers = [
//     { id: 1, name: 'Addis', imgSrc: Addis, role: 'CEO', 
//     description: 'AS CEO OF \"251 COMMUNICATION AND MARKETING PLC,\" FANTISH DRIVES THE COMPANY\'S VISION AND GROWTH, ENSURING ALL OPERATIONS ALIGN WITH ITS STRATEGIC OBJECTIVES AND LONG-TERM SUCCESS.'
//  },
//     { id: 2, name: 'Fantawork samuel', imgSrc: Fantish, role: 'CEO', description: 'Fantawork brings a wealth of experience in strategic marketing, brand development, and stakeholder engagement. With a proven track record of managing cross-functional teams and driving successful business outcomes, she is a highly respected leader. As CEO of 251 Communications, her focus is on innovation, growth, and elevating brands within the Ethiopian and international markets.'
//  },
//     { id: 3, name: 'Jhon', imgSrc: Jhon, role: '', description: ''
//  },
//     { id: 4, name: 'Naod Mulu', imgSrc: Naod, role: '',description: 'He brings a unique blend of creativity and technical expertise, shaping impactful visuals for leading Ethiopian brands. His ability to lead creative campaigns across diverse sectors has positioned him as a key contributor to innovative marketing strategies at 251 Communications.'
// },
//     { id: 5, name: 'Bamlak Abebayehu', imgSrc: Bamlak, role: '', description: 'A dynamic digital lead with a strong tech background, he has a proven track record in digital transformation and user engagement. Known for wearing many hats and supporting every department, he is a great leader passionate about merging creativity with analytics to drive innovation.'
//  },
//     { id: 6, name: 'Michael Mekonne', imgSrc: Michael, role: '', description: 'Michael Mekonne manages client relationships and ensures the successful execution of communication strategies at 251 Communications. With experience spanning technology, healthcare, and entertainment, he plays a pivotal role in driving business growth and maintaining client satisfaction.'
//  },
//  { id: 7, name: 'Biniyam Lemma ', imgSrc: Biniam, role: '', description: 'As Experiential expert, specializes in Below the Line (BTL) marketing, delivering memorable brand experiences. His expertise in leading teams and executing high-impact projects ensures that every activation leaves a lasting impression on both clients and audiences.'

//  },
 
//   ];
//   const [selectedMember, setSelectedMember] = useState(null);
 
//   const handleMemberClick = (member) => {
//     setSelectedMember(member);
//   };

//     const closeCard = () => {
//     setSelectedMember(null);
//   };
//   return (
//    <section className="about-wrapper">
//  <Expermental/>
//  <MissionVisionValues/>

//       {/* <div className="mission-container flex flex-col items-center justify-center p2 md:p-10 mt-20">
//         <div className='w-[50%]'>
//         <img src={Mission} alt="mission" className='w-[100%]' />
//         <div className='text-[--yellow] mt-[10%]'>
//         <Slider {...settings} className='flex items-center justify-between px-[3rem]'>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
// </Slider>
// </div>
//         </div>
      
//     </div>

//     <div className="vision-container flex flex-col items-center justify-center p-2 md:p-10 mt-20">
//         <div className='w-[50%]'>
//         <img src={Vision} alt="mission" className='w-[100%]' />
//         <div className='text-[--yellow] mt-[10%]'>
//         <Slider {...settings} className='flex items-center justify-between px-[3rem]'>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
// </Slider>
// </div>
//         </div>
      
//     </div>

//     <div className="values-container flex flex-col items-center justify-center p-2 md:p-10 mt-20">
//         <div className='w-[50%]'>
//         <img src={Values} alt="mission" className='w-[100%]' />
//         <div className='text-[--yellow] mt-[10%]'>
//         <Slider {...settings} className='flex items-center justify-between px-[3rem]'>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
//   <div className='flex items-center justify-center w-full mx-auto'>
//     <h3 className='text-[--yellow] text-center max-w-[600px]'>
//       To provide a second to none marketing service to our customers
//     </h3>
//   </div>
// </Slider>
// </div>
//         </div>
      
//     </div> */}
//     {/* <div className="mission-container flex flex-col items-center justify-center p-2 md:p-10 mt-20">
//   <div className='w-[50%]'>
//     <img src={Mission} alt="mission" className='w-[100%]' />
//     <div className='text-[--yellow] mt-[10%] overflow-x-auto'>
//       <div className='flex space-x-6 w-max'>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>To provide a second to none marketing service to our customers</li>
//             <li>High customer satisfaction</li>
//             <li>Innovation in marketing strategies</li>
//           </ul>
//         </div>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>Delivering excellent customer experience</li>
//             <li>Commitment to quality</li>
//             <li>Continuous improvement</li>
//           </ul>
//         </div>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>Leading with integrity</li>
//             <li>Transparency in all services</li>
//             <li>Building long-term relationships</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="vision-container flex flex-col items-center justify-center p-2 md:p-10 mt-20">
//   <div className='w-[50%]'>
//     <img src={Vision} alt="vision" className='w-[100%]' />
//     <div className='text-[--yellow] mt-[10%] overflow-x-auto'>
//       <div className='flex space-x-6 w-max'>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>Becoming a global leader in marketing services</li>
//             <li>Revolutionizing the industry with innovation</li>
//             <li>Providing unmatched customer value</li>
//           </ul>
//         </div>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>Exceeding expectations in every project</li>
//             <li>Building a trusted brand worldwide</li>
//             <li>Offering tailored marketing solutions</li>
//           </ul>
//         </div>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>Constantly pushing the boundaries</li>
//             <li>Encouraging creativity and collaboration</li>
//             <li>Expanding into new markets</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="values-container flex flex-col items-center justify-center p-2 md:p-10 mt-20">
//   <div className='w-[50%]'>
//     <img src={Values} alt="values" className='w-[100%]' />
//     <div className='text-[--yellow] mt-[10%] overflow-x-auto'>
//       <div className='flex space-x-6 w-max'>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>Integrity in all we do</li>
//             <li>Honesty and transparency</li>
//             <li>Customer-centric approach</li>
//           </ul>
//         </div>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>Innovation in marketing practices</li>
//             <li>Commitment to growth</li>
//             <li>Empowering employees and clients</li>
//           </ul>
//         </div>
//         <div className='flex flex-col items-center'>
//           <ul className='text-[--yellow] list-disc text-center max-w-[600px]'>
//             <li>Driving success with passion</li>
//             <li>Continuous improvement</li>
//             <li>Focus on long-term value</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}

//     <div className="about-container p-[40px]  md:px-[80px]">
//     <div className="team-container flex flex-col">
//      {!selectedMember && (

//       <div className="flex-col">
//         <h1 className=" text-[3.5rem] md:text-[4rem]  text-[--white] font-[100]"
//                 style={{ fontFamily: 'Montserrat, sans-serif' }} >THE TEAM IS OUR GREATEST ASSET</h1>
 
//       </div>
//        )
//      }

//       <div className="flex flex-col mt-16">
        
//         <div className="image-container flex flex-wrap md:flex-nowrap mt-10 gap-8">
//           {teamMembers.map((member) => (
//             <div
//               key={member.id}
//               className="flex flex-col gap-2 items-center p-0 m-0 cursor-pointer"
//               onClick={() => handleMemberClick(member)}
//             >
//             <img src={member.imgSrc} alt={member.name} className="h-[400px] object-cover rounded-none" />

//               <span className="text-[--white] text-[1.1rem] md:text-[1.3rem] font-[700]">{member.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Conditional rendering of the selected member card */}
//       {selectedMember && (
//         <div className="w-full px-20  h-full flex justify-center items-center bg-[--black-opacity]">
//           <div className="bg-[black] relative border-solid border-[1px] border-[--white] flex gap-8  p-8 rounded-lg">
//            <div className=''>
//             <h2 className="text-[2rem] text-[--yellow] font-[700]">{selectedMember.name}</h2>
//             <p className="text-[1.5rem] text-[--white]">{selectedMember.role}</p>
//           </div>
//            <div className="border-[1px] border-[--white] h-auto"></div>
//            <p className='text-[1rem] text-[--white]'>{selectedMember.description}</p>
//             <button onClick={closeCard} className="text-[--white] absolute top-0 right-0 p-2 px-4">x</button>
//           </div>
//         </div>
//       )}
//     </div>
//       </div>


//    </section>
//   )
// }

// export default Abouthero;
import React, { useState } from 'react';
import Addis from '../../asset/Addis.jpg';
import Bamlak from '../../asset/Bamlak.png';
import Jhon from '../../asset/Jhon.png';
import Naod from '../../asset/Naod.png';
import Michael from '../../asset/Michael.png';
import Biniam from '../../asset/Biniam.png';
import Fantish from '../../asset/fantish.png';
import Mission from '../../asset/Mission.png';
import Vision from '../../asset/Vision.png';
import Values from '../../asset/Values.png';
import Expermental from '../aboutpages/expermental/Expermental';
import MissionVisionValues from '../../component/MissionVisionValues/MissionVisionValues';

const Abouthero = () => {


  const teamMembers = [
        { id: 1, name: 'Addis Alemayehu', imgSrc: Addis, role: 'Chairman', 
        description: 'Addis Alemayehu is the Chairman of Kazana and the Founder & Managing Partner of 251 Communications in Addis Ababa, Ethiopia. He also founded Paconet Media PLC, launching Ethiopias first private English FM station (105.3 AFRO FM), and co-founded Kana Television, a pioneering entertainment channel. Additionally, he is involved with Brand Africa, a pan-African movement promoting a positive African identity and competitiveness.'
     },
        { id: 2, name: 'Fantawork samuel', imgSrc: Fantish, role: 'CEO', description: 'Fantawork brings a wealth of experience in strategic marketing, brand development, and stakeholder engagement. With a proven track record of managing cross-functional teams and driving successful business outcomes, she is a highly respected leader. As CEO of 251 Communications, her focus is on innovation, growth, and elevating brands within the Ethiopian and international markets.'
     },
        { id: 3, name: 'Jhon Kimani', imgSrc: Jhon, role: '', description: 'A seasoned Creative Director with 18 years of experience, John has collaborated with renowned brands like Guinness, Visa, Diageo, and Absa Bank. His award-winning work spans multiple countries, including South Africa, Tanzania, Uganda, India, Dubai, and currently Ethiopia.'
     },
        { id: 4, name: 'Naod Mulu', imgSrc: Naod, role: '',description: 'He brings a unique blend of creativity and technical expertise, shaping impactful visuals for leading Ethiopian brands. His ability to lead creative campaigns across diverse sectors has positioned him as a key contributor to innovative marketing strategies at 251 Communications.'
    },
        { id: 5, name: 'Bamlak Abebayehu', imgSrc: Bamlak, role: '', description: 'A dynamic digital lead with a strong tech background, he has a proven track record in digital transformation and user engagement. Known for wearing many hats and supporting every department, he is a great leader passionate about merging creativity with analytics to drive innovation.'
     },
        { id: 6, name: 'Michael Mekonne', imgSrc: Michael, role: '', description: 'Michael Mekonne manages client relationships and ensures the successful execution of communication strategies at 251 Communications. With experience spanning technology, healthcare, and entertainment, he plays a pivotal role in driving business growth and maintaining client satisfaction.'
     },
     { id: 7, name: 'Biniyam Lemma ', imgSrc: Biniam, role: '', description: 'As Experiential expert, specializes in Below the Line (BTL) marketing, delivering memorable brand experiences. His expertise in leading teams and executing high-impact projects ensures that every activation leaves a lasting impression on both clients and audiences.'
    
     },
     
      ];
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMouseEnter = (member) => {
    setSelectedMember(member);
  };

  const handleMouseLeave = () => {
    setSelectedMember(null);
  };

  return (
    <section className="about-wrapper">
      <Expermental />
      <MissionVisionValues />
      <div className="about-container p-[40px] md:px-[80px]">
        <div className="team-container flex flex-col">
          {!selectedMember && (
            <div className="flex-col">
              <h1 className="text-[3.5rem] md:text-[4rem] text-[--white] font-[100]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}>THE TEAM IS OUR GREATEST ASSET</h1>
            </div>
          )}

          <div className="flex flex-col mt-16">
            <div className="image-container flex flex-wrap md:flex-nowrap mt-10 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col gap-2 items-center p-0 m-0 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(member)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={member.imgSrc} alt={member.name} className="h-[400px] object-cover rounded-none" />
                  <span className="text-[--white] text-[1.1rem] md:text-[1.3rem] font-[700]">{member.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conditional rendering of the selected member card */}
          {selectedMember && (
            <div className="w-full px-20 h-full flex justify-center items-center bg-[--black-opacity]">
              <div className="bg-[black] relative border-solid border-[1px] border-[--white] flex gap-8 p-8 rounded-lg">
                <div className=''>
                  <h2 className="text-[2rem] text-[--yellow] font-[700]">{selectedMember.name}</h2>
                  <p className="text-[1.5rem] text-[--white]">{selectedMember.role}</p>
                </div>
                <div className="border-[1px] border-[--white] h-auto"></div>
                <p className='text-[1rem] text-[--white]'>{selectedMember.description}</p>
                <button onClick={handleMouseLeave} className="text-[--white] absolute top-0 right-0 p-2 px-4">x</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Abouthero;
