// import React, { useState } from "react";
// import Mainheader from '../Aboutheader/Mainheader';
// import CocaImage from "../../asset/CocaCola 251WebPage.jpg";
// import Raxio from "../../asset/RAXIO 251WebPage.jpg";
// import MasterCard from "../../asset/MasterCard 251WebPage.jpg";
// import Visa from "../../asset/VISA 251WebPage.jpg";
// import downImage from "../../asset/251_DownIcon.png"
// import Huawei from "../../asset/Huwa_251WebPage-03.png";
// import Emirates from "../../asset/Huwa_251WebPage-04.png"
// import HollandImage from "../../asset/Holland 251WebPage.jpg" // Adjust the import path to match your project structure
// import WorkDetail from './WorkDetail'; // Import the WorkDetail component

// const Work = () => {
//   const [selectedWork, setSelectedWork] = useState(null);

//   const workItems = [
//     {
//       title: "Holland Milk",
//       description:
//         "Holland Dairy is a top provider of premium dairy products in Ethiopia, known for their high-quality milk and yogurt. They are trusted for freshness and superior taste, leading the market in dairy innovation.",
//       image: HollandImage,
//       buttonLabel: "View",
//     },
//     {
//       title: "Coca Cola Africa",
//       description:
//         "They are the largest Coca-Cola bottling partner in Africa, responsible for around 40% of the continent's total Coca-Cola sales. Globally, they rank as the eighth largest by revenue. Their scale and impact make them a key player in Coca-Cola's operations across Africa.",
//       image: CocaImage,
//       buttonLabel: "View",
//     },
//     {
//       title: "Raxio",
//       description:
//         "They are Africa's leading carrier neutral data center operator, building and managing continent's largest network of Tier III data centers, designed for both retail and wholesale clients. Their services cater to the businesses of all sizes.",
//       image: Raxio,
//       buttonLabel: "View",
//     },
//     {
//       title: "Master Card",
//       description:
//         "Mastercard powers an inclusive digital economy by making transactions safe, simple, and accessible for all. We are a global technology company that connects consumers, businesses, and governments through our payment network. Our mission is to create a world where everyone has the power to participate in the economy.",
//       image: MasterCard,
//       buttonLabel: "View",
//     },
//     {
//       title: "Visa",
//       description:
//         "They are Africa's leading carrier neutral data center operator, building and managing continent's largest network of Tier III data centers, designed for both retail and wholesale clients. Their services cater to the businesses of all sizes.",
//       image: Visa,
//       buttonLabel: "View",
//     },
//     {
//       title: "Huawei",
//       description:
//         "Huawei is a global leader in ICT and smart devices. Headquartered in Shenzhen, China, it provides telecommunications equipment, smartphones, and enterprise solutions. Known for innovation and its role in 5G technology, Huawei serves customers in over 170 countries, driving digital transformation worldwide.",
//       image: Huawei,
//       buttonLabel: "View",
//     },
//     {
//       title: "Emirates",
//       description:
//         "Emirates, founded in 1985 and based in Dubai, is a leading global airline serving over 150 destinations. Known for innovation and luxury, it operates a modern fleet, including the Airbus A380 and Boeing 777. Emirates is renowned for its world-class service, in-flight entertainment, and role in positioning Dubai as a major global hub.",
//       image: Emirates,
//       buttonLabel: "View",
//     },
//   ];

//   const handleViewClick = (workItem) => {
//     setSelectedWork(workItem);
//   };

//   const handleBackClick = () => {
//     setSelectedWork(null);
//   };

//   return (
// //     <section className="bg-[--white]">
// //       <Mainheader />
      
// //       {selectedWork ? (
// //         // Render the WorkDetail component if a work is selected
// //         <WorkDetail selectedWork={selectedWork} onBack={handleBackClick} />
// //       ) : (
// //         // Render the list of works if no work is selected
// //         <div className="work-container px-2 md:px-20 flex flex-col items-center">
// //           <h1 className="text-[4rem] text-[--blue] font-bold mb-10">WORKS</h1>

// //           {workItems.map((item, index) => (
// //             <div
// //               key={index}
// //               className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 bg-[--pink] p-10 mb-10"
// //             >
// //               {/* <div className="flex-1">
// //                 <h2 className="text-[2.5rem] text-[--black] font-bold mb-4">{item.title}</h2>
// //                 <p className="text-[1rem] sm:text-[1.2rem] text-[--black] mb-4">{item.description}</p>
// //                 <button 
// //                   className="bg-[--yellow] h-[50px] w-[120px] text-[--black] font-semibold"
// //                   onClick={() => handleViewClick(item)}
// //                 >
// //                   {item.buttonLabel}
// //                 </button>
// //               </div> */}
// //       <div className="flex-1">
// //   <h2 className="text-[2.5rem] text-[--black] font-bold mb-4">{item.title}</h2>
// //   <p className="text-[1rem] sm:text-[1.2rem] text-[--black] mb-4">{item.description}</p>
// //   <button 
// //     className="h-[120px] w-[120px] text-[--black] font-semibold bg-center relative"
// //     style={{
// //       backgroundImage: `url(${downImage})`, // Ensure this is your circular image
// //       backgroundSize: 'contain', // Ensures the entire image is visible
// //       backgroundPosition: 'center', // Centers the image
// //       borderRadius: '50%', // Makes the button circular
     
// //     }}
// //     onClick={() => handleViewClick(item)}
// //   >
// //     {/* Optional content inside the button */}
// //   </button>
// // </div>

// //               <img
// //                 src={item.image}
// //                 alt={item.title}
// //                 className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px]"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </section>
// <section className="bg-[--white]">
//   <Mainheader />
  
//   {selectedWork ? (
//     <WorkDetail selectedWork={selectedWork} onBack={handleBackClick} />
//   ) : (
//     <div className="work-container px-2 md:px-20 flex flex-col items-center">
//       <h1 className="text-[4rem] text-[--blue] font-bold mb-10">WORKS</h1>

//       {workItems.map((item, index) => (
//         <div
//           key={index}
//           className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 bg-[--pink] p-10 mb-10"
//         >
//           {/* Image on the left */}
//           <img
//             src={item.image}
//             alt={item.title}
//             className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px] object-contain"
//           />
          
//           {/* Content */}
//           <div className="flex-1 flex flex-col">
//             <h2 className="text-[2.5rem] text-[--black] font-bold mb-4">{item.title}</h2>
//             <p className="text-[1rem] sm:text-[1.2rem] text-[--black] mb-4">{item.description}</p>
//           </div>

//           {/* Button on the far right */}
//           <button 
//             className="h-[120px] w-[120px] text-[--black] font-semibold bg-center relative ml-auto"
//             style={{
//               backgroundImage: `url(${downImage})`, // Your circular image
//               backgroundSize: 'contain',
//               backgroundPosition: 'center',
//               borderRadius: '50%', // Circular button
//             }}
//             onClick={() => handleViewClick(item)}
//           >
//             {/* Optional content inside the button */}
//           </button>
//         </div>
//       ))}
//     </div>
//   )}
// </section>

//   );
// };

// export default Work;
// import React, { useState } from "react";
// import Mainheader from '../Aboutheader/Mainheader';
// import CocaImage from "../../asset/CocaCola 251WebPage.jpg";
// import Raxio from "../../asset/RAXIO 251WebPage.jpg";
// import MasterCard from "../../asset/MasterCard 251WebPage.jpg";
// import Visa from "../../asset/VISA 251WebPage.jpg";
// import downImage from "../../asset/251_DownIcon.png";
// import Huawei from "../../asset/Huwa_251WebPage-03.png";
// import Emirates from "../../asset/Huwa_251WebPage-04.png";
// import HollandImage from "../../asset/Holland 251WebPage.jpg"; 
// import WorkDetail from './WorkDetail'; 

// const Work = () => {
//   const [selectedWork, setSelectedWork] = useState(null);

//   const workItems = [
//     {
//       title: "Holland Dairy",
//       description: "IT GOES WITH HOLLAND",
//       image: HollandImage,
//       backgroundColor: "#FFFFFF",
//     },
//     {
//       title: "Coca-Cola",
//       description: "IT GOES WITH HOLLAND",
//       image: CocaImage,
//       backgroundColor: "#F12D2D",
//     },
//     {
//       title: "Raxio",
//       description: "IT GOES WITH HOLLAND",
//       image: Raxio,
//       backgroundColor: "#FFFFFF",
//     },
//     {
//       title: "Dashen Bank",
//       description: "IT GOES WITH HOLLAND",
//       image: MasterCard,
//       backgroundColor: "#FFFFFF",
//     },
//     {
//       title: "Huawei",
//       description: "IT GOES WITH HOLLAND",
//       image: Huawei,
//       backgroundColor: "#FFFFFF",
//     },
//     {
//       title: "Emirates",
//       description: "IT GOES WITH HOLLAND",
//       image: Emirates,
//       backgroundColor: "#FFFFFF",
//     },
//     {
//       title: "GIZ",
//       description: "IT GOES WITH HOLLAND",
//       image: Visa,
//       backgroundColor: "#FFFFFF",
//     },
//   ];

//   const handleViewClick = (workItem) => {
//     setSelectedWork(workItem);
//   };

//   const handleBackClick = () => {
//     setSelectedWork(null);
//   };

//   return (
//     <section className="bg-[--white]">
//       <Mainheader />
      
//       {selectedWork ? (
//         <WorkDetail selectedWork={selectedWork} onBack={handleBackClick} />
//       ) : (
//         <div className="work-container px-2 md:px-20 flex flex-col items-center">
//           <h1 className="text-[4rem] text-[--blue] font-bold mb-10">WORKS</h1>

//           {workItems.map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between w-full p-5 mb-5 rounded-lg shadow-lg"
//               style={{ backgroundColor: item.backgroundColor }}
//             >
//               {/* Left Image */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-[100px] h-[100px] object-contain"
//               />
              
//               {/* Center Content */}
//               <div className="flex-1 ml-5">
//                 <h2 className="text-[1.5rem] font-bold">{item.title}</h2>
//                 <p className="text-[1rem] text-gray-600">{item.description}</p>
//               </div>

//               {/* Right Arrow Button */}
//               <button 
//                 className="w-[50px] h-[50px] flex items-center justify-center bg-transparent"
//                 style={{
//                   backgroundImage: `url(${downImage})`,
//                   backgroundSize: 'contain',
//                   backgroundRepeat: 'no-repeat',
//                   backgroundPosition: 'center',
//                 }}
//                 onClick={() => handleViewClick(item)}
//               >
//                 {/* No extra content inside the button */}
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Work;

import React, { useState } from "react";
import Mainheader from '../Aboutheader/Mainheader';
import CocaImage from "../../asset/CocaCola 251WebPage.jpg";
import Raxio from "../../asset/RAXIO 251WebPage.jpg";
import MasterCard from "../../asset/MasterCard 251WebPage.jpg";
import Visa from "../../asset/VISA 251WebPage.jpg";
import downImage from "../../asset/251_DownIcon.png";
import upImage  from "../../asset/251_UpIcon.png"
import Huawei from "../../asset/Huwa_251WebPage-03.png";
import Emirates from "../../asset/Huwa_251WebPage-04.png";
import HollandImage from "../../asset/Holland.jpg";

const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the expanded card

  const workItems = [
    {
      title: "Holland Dairy",
      description: "Holland Dairy is a top provider of premium dairy products in ethiopia.",
      image: HollandImage,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "Coca-Cola",
      description: "Africas largest cocal-coal bottling partner.",
      image: CocaImage,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "Raxio",
      description: "Africa's Leading Carrier Neutral Data Center",
      image: Raxio,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "Master Card",
      description: "Master Card Powers an inclusive digital economy by making transaction safe, simple and accesible for all.",
      image: MasterCard,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "Huawei",
      description: "Huawei is a global leader in ICT and smart device",
      image: Huawei,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "Emirates",
      description: "Known for innovation and lexury, it operats a modern fleet, including the Airbus A380 and Boeing 777. ",
      image: Emirates,
      backgroundColor: "#FFFFFF",
    },
    {
      title: "VISA",
      description: "Trusted global network and leader in digital payments.",
      image: Visa,
      backgroundColor: "#FFFFFF",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expand/collapse for each item
  };

  return (
    <section className="bg-[--white]">
      <Mainheader />
      
      <div className="work-container px-2 md:px-20 flex flex-col items-center">
        <h1 className="text-[4rem] text-[--blue] font-bold mb-10">OUR WORKS</h1>

        {workItems.map((item, index) => (
          <div
            key={index}
            className="w-full mb-5 p-5 rounded-lg shadow-lg"
            style={{ backgroundColor: item.backgroundColor }}
          >
            <div className="flex items-center justify-between">
              {/* Left Image */}
              <img
                src={item.image}
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
    </section>
  );
};

export default Work;

