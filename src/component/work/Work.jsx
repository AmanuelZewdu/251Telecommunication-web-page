

import React, { useState } from "react";
import Mainheader from '../Aboutheader/Darkheader';
import CocaImage from "../../asset/CocaCola 251WebPage.jpg";
import Raxio from "../../asset/RAXIO 251WebPage.jpg";
import MasterCard from "../../asset/MasterCard 251WebPage.jpg";
import Visa from "../../asset/VISA 251WebPage.jpg";
import downImage from "../../asset/251_DownIcon.png";
import upImage  from "../../asset/251_UpIcon.png"
import Huawei from "../../asset/Huwa_251WebPage-03.png";
import Emirates from "../../asset/Huwa_251WebPage-04.png";
import HollandImage from "../../asset/Holland.jpg";
import Dashen from "../../asset/Dashen.jpg";

import CocaColaLogo from "../../asset/Clients/Clients logo 1-02.png"
import RaxioLogo from "../../asset/Clients/Clients logo 1-16.png"
import HuaweiLogo from "../../asset/Clients/Clients logo 1-11.png"
import EmiratesLogo from "../../asset/Clients/Clients logo 1-13.png"
import VisaLogo from "../../asset/Clients/Clients logo 1-05.png"
import MasterCardLogo from "../../asset/Clients/master_card_logo.png"
import HollandLogo from "../../asset/Clients/holland_logo.png"
import DashenLogo from "../../asset/Clients/Clients logo 1-24.png"
import Footer from "../footer/Footer";


const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded card

  const workItems = [
    {
      title: "Coca-Cola",
      description: "Africas largest cocal-coal bottling partner.",
      image: CocaImage,
      backgroundColor: "#FFFFFF",
      logo: CocaColaLogo
    },
    {
      title: "VISA",
      description: "Trusted global network and leader in digital payments.",
      image: Visa,
      backgroundColor: "#FFFFFF",
      logo:VisaLogo
    },
    {
      title: "Master Card",
      description: "Master Card Powers an inclusive digital economy by making transaction safe, simple and accesible for all.",
      image: MasterCard,
      backgroundColor: "#FFFFFF",
      logo:MasterCardLogo
    },
    {
      title: "Emirates",
      description: "Known for innovation and lexury, it operats a modern fleet, including the Airbus A380 and Boeing 777. ",
      image: Emirates,
      backgroundColor: "#FFFFFF",
      logo:EmiratesLogo
    },
    {
      title: "Huawei",
      description: "Huawei is a global leader in ICT and smart device",
      image: Huawei,
      backgroundColor: "#FFFFFF",
      logo:HuaweiLogo
    },
    {
      title: "Holland Dairy",
      description: "Holland Dairy is a top provider of premium dairy products in ethiopia.",
      image: HollandImage,
      backgroundColor: "#FFFFFF",
      logo:HollandLogo
   
    },
  
    {
      title: "Raxio",
      description: "Africa's Leading Carrier Neutral Data Center",
      image: Raxio,
      backgroundColor: "#FFFFFF",
      logo:RaxioLogo
    },
    {
      title: "Dashen",
      description: "Dashen Bank was established as per the intent of the new policy and the ethiopian investment code.",
      image: Dashen,
      backgroundColor: "#FFFFFF",
      logo:DashenLogo
    },
 
    
   
   
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expand/collapse for each item
  };

  return (
    <section className="bg-gray-600">
    <Mainheader />
    
    <div className="work-container px-2 md:px-20 flex flex-col items-center">
      {workItems.map((item, index) => (
        <div
          key={index}
          className="w-full mb-5 p-5 rounded-lg shadow-lg"
          style={{ backgroundColor: item.backgroundColor }}
        >
          <div className="flex items-center justify-between">
            {/* Left Image */}
            <img
              src={item.logo}
              alt={item.title}
              className="w-[100px] h-[100px] object-contain"
            />
            
            {/* Center Content */}
            <div className="flex-1 ml-5">
              <h2 className="text-[1.5rem] font-bold">{item.title}</h2>
              <p className="text-[1rem] text-gray-600">{item.description}</p>
            </div>
  
            {/* Right Arrow Button */}
            <button 
              className="w-[50px] h-[50px] flex items-center justify-center bg-transparent"
              style={{
                backgroundImage: `url(${expandedIndex === index ? upImage : downImage})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
              onClick={() => toggleExpand(index)}
            >
              {/* Arrow Button toggles between up and down based on expanded state */}
            </button>
          </div>
  
          {/* Expanded content: full-width image under the card */}
          {expandedIndex === index && (
            <div className="mt-4">
              <img
                src={item.image}
                alt={`${item.title} expanded`}
                className="w-full h-auto max-w-[1100px] object-contain mx-auto"
              />
            </div>
          )}
        </div>
      ))}
    </div>
    <Footer/>
  </section>
  
  );
};

export default Work;

