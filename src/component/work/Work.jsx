import React, { useState } from "react";
import Mainheader from '../Aboutheader/Mainheader';
import CocaImage from "../../asset/CocaCola 251WebPage.jpg";
import Raxio from "../../asset/RAXIO 251WebPage.jpg";
import MasterCard from "../../asset/MasterCard 251WebPage.jpg";
import Visa from "../../asset/VISA 251WebPage.jpg";
import downImage from "../../asset/251_DownIcon.png"
import Huawei from "../../asset/Huwa_251WebPage-03.png";
import Emirates from "../../asset/Huwa_251WebPage-04.png"
import HollandImage from "../../asset/Holland 251WebPage.jpg" // Adjust the import path to match your project structure
import WorkDetail from './WorkDetail'; // Import the WorkDetail component

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const workItems = [
    {
      title: "Holland Milk",
      description:
        "Holland Dairy is a top provider of premium dairy products in Ethiopia, known for their high-quality milk and yogurt. They are trusted for freshness and superior taste, leading the market in dairy innovation.",
      image: HollandImage,
      buttonLabel: "View",
    },
    {
      title: "Coca Cola Africa",
      description:
        "They are the largest Coca-Cola bottling partner in Africa, responsible for around 40% of the continent's total Coca-Cola sales. Globally, they rank as the eighth largest by revenue. Their scale and impact make them a key player in Coca-Cola's operations across Africa.",
      image: CocaImage,
      buttonLabel: "View",
    },
    {
      title: "Raxio",
      description:
        "They are Africa's leading carrier neutral data center operator, building and managing continent's largest network of Tier III data centers, designed for both retail and wholesale clients. Their services cater to the businesses of all sizes.",
      image: Raxio,
      buttonLabel: "View",
    },
    {
      title: "Master Card",
      description:
        "Mastercard powers an inclusive digital economy by making transactions safe, simple, and accessible for all. We are a global technology company that connects consumers, businesses, and governments through our payment network. Our mission is to create a world where everyone has the power to participate in the economy.",
      image: MasterCard,
      buttonLabel: "View",
    },
    {
      title: "Visa",
      description:
        "They are Africa's leading carrier neutral data center operator, building and managing continent's largest network of Tier III data centers, designed for both retail and wholesale clients. Their services cater to the businesses of all sizes.",
      image: Visa,
      buttonLabel: "View",
    },
    {
      title: "Huawei",
      description:
        "Huawei is a global leader in ICT and smart devices. Headquartered in Shenzhen, China, it provides telecommunications equipment, smartphones, and enterprise solutions. Known for innovation and its role in 5G technology, Huawei serves customers in over 170 countries, driving digital transformation worldwide.",
      image: Huawei,
      buttonLabel: "View",
    },
    {
      title: "Emirates",
      description:
        "Emirates, founded in 1985 and based in Dubai, is a leading global airline serving over 150 destinations. Known for innovation and luxury, it operates a modern fleet, including the Airbus A380 and Boeing 777. Emirates is renowned for its world-class service, in-flight entertainment, and role in positioning Dubai as a major global hub.",
      image: Emirates,
      buttonLabel: "View",
    },
  ];

  const handleViewClick = (workItem) => {
    setSelectedWork(workItem);
  };

  const handleBackClick = () => {
    setSelectedWork(null);
  };

  return (
//     <section className="bg-[--white]">
//       <Mainheader />
      
//       {selectedWork ? (
//         // Render the WorkDetail component if a work is selected
//         <WorkDetail selectedWork={selectedWork} onBack={handleBackClick} />
//       ) : (
//         // Render the list of works if no work is selected
//         <div className="work-container px-2 md:px-20 flex flex-col items-center">
//           <h1 className="text-[4rem] text-[--blue] font-bold mb-10">WORKS</h1>

//           {workItems.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 bg-[--pink] p-10 mb-10"
//             >
//               {/* <div className="flex-1">
//                 <h2 className="text-[2.5rem] text-[--black] font-bold mb-4">{item.title}</h2>
//                 <p className="text-[1rem] sm:text-[1.2rem] text-[--black] mb-4">{item.description}</p>
//                 <button 
//                   className="bg-[--yellow] h-[50px] w-[120px] text-[--black] font-semibold"
//                   onClick={() => handleViewClick(item)}
//                 >
//                   {item.buttonLabel}
//                 </button>
//               </div> */}
//       <div className="flex-1">
//   <h2 className="text-[2.5rem] text-[--black] font-bold mb-4">{item.title}</h2>
//   <p className="text-[1rem] sm:text-[1.2rem] text-[--black] mb-4">{item.description}</p>
//   <button 
//     className="h-[120px] w-[120px] text-[--black] font-semibold bg-center relative"
//     style={{
//       backgroundImage: `url(${downImage})`, // Ensure this is your circular image
//       backgroundSize: 'contain', // Ensures the entire image is visible
//       backgroundPosition: 'center', // Centers the image
//       borderRadius: '50%', // Makes the button circular
     
//     }}
//     onClick={() => handleViewClick(item)}
//   >
//     {/* Optional content inside the button */}
//   </button>
// </div>

//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px]"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
<section className="bg-[--white]">
  <Mainheader />
  
  {selectedWork ? (
    <WorkDetail selectedWork={selectedWork} onBack={handleBackClick} />
  ) : (
    <div className="work-container px-2 md:px-20 flex flex-col items-center">
      <h1 className="text-[4rem] text-[--blue] font-bold mb-10">WORKS</h1>

      {workItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 bg-[--pink] p-10 mb-10"
        >
          {/* Image on the left */}
          <img
            src={item.image}
            alt={item.title}
            className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] object-contain"
          />
          
          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-[2.5rem] text-[--black] font-bold mb-4">{item.title}</h2>
            <p className="text-[1rem] sm:text-[1.2rem] text-[--black] mb-4">{item.description}</p>
          </div>

          {/* Button on the far right */}
          <button 
            className="h-[120px] w-[120px] text-[--black] font-semibold bg-center relative ml-auto"
            style={{
              backgroundImage: `url(${downImage})`, // Your circular image
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              borderRadius: '50%', // Circular button
            }}
            onClick={() => handleViewClick(item)}
          >
            {/* Optional content inside the button */}
          </button>
        </div>
      ))}
    </div>
  )}
</section>

  );
};

export default Work;
