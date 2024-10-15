// import React from "react";
// import Mainheader from '../Aboutheader/Mainheader';
// import CocaImage from "../../asset/cocacola.png"; // Adjust the import path to match your project structure

// const Work = () => {
//   const workItems = [
//     {
//       title: "Holland Milk",
//       description:
//         "Holland Dairy is a top provider of premium dairy products in Ethiopia, known for their high-quality milk and yogurt. They are trusted for freshness and superior taste, leading the market in dairy innovation.",
//       image: CocaImage,
//       buttonLabel: "View",
//     },
//     {
//       title: "Coca cola Africa",
//       description:
//         "They are the largest Coca-Cola bottling partner in Africa, responsible for around 40% of the continent's total Coca-Cola sales. Globally, they rank as the eighth largest by revenue. Their scale and impact make them a key player in Coca-Cola's operations across Africa.",
//       image: CocaImage,
//       buttonLabel: "View",
//     },
//     {
//       title: "Coca cola Africa",
//       description:
//         "They are the largest Coca-Cola bottling partner in Africa, responsible for around 40% of the continent's total Coca-Cola sales. Globally, they rank as the eighth largest by revenue. Their scale and impact make them a key player in Coca-Cola's operations across Africa.",
//       image: CocaImage,
//       buttonLabel: "View",
//     },
//   ];

//   return (
//     <section className="bg-[--white]">
//       <Mainheader />
//     <div className="work-container sm:mt-auto px-2 md:p-20 flex flex-col">
//       <h1 className="text-[4rem] text-[--blue] font-[700]">WORKS</h1>

//       <div className="flex flex-col sm:flex-row w-full justify-center align-middle items-center gap-6 bg-[--pink] p-10">
//         <div>
//           <h1 className="text-[2rem] font-[700] text-[--black]">{workItems[0].title}</h1>
//           <p className="text-[.7rem] sm:text-[.9rem]">{workItems[0].description}</p>
//         </div>
//         <img
//           src={workItems[0].image}
//           alt={workItems[0].title}
//           className="sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
//         />
//         <button className="bg-[--yellow] h-[50px] sm:px-[2.5rem] px-[2rem]">
//           {workItems[0].buttonLabel}
//         </button>
//       </div>

//       <div className="flex w-full flex-col lg:flex-row gap-6 mt-10 justify-center items-center">
//         {workItems.slice(1).map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col sm:flex-row items-center bg-[--pink] p-6 gap-8"
//           >
//             <div>
//               <h1 className="sm:text-[2rem] text-[1.8rem] font-[700] text-[--black]">
//                 {item.title}
//               </h1>
//               <p>{item.description}</p>
//             </div>
//             <div className="flex flex-col gap-8">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
//               />
//               <button className="bg-[--yellow] h-[40px] sm:px-[2.5rem] px-[2rem]">
//                 {item.buttonLabel}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </section>
//   );
// };

// export default Work;
// import React from "react";
// import Mainheader from '../Aboutheader/Mainheader';
// import CocaImage from "../../asset/cocacola.png"; // Adjust the import path to match your project structure

// const Work = () => {
//   const workItems = [
//     {
//       title: "Holland Milk",
//       description:
//         "Holland Dairy is a top provider of premium dairy products in Ethiopia, known for their high-quality milk and yogurt. They are trusted for freshness and superior taste, leading the market in dairy innovation.",
//       image: CocaImage,
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
//       title: "Coca Cola Africa",
//       description:
//         "They are the largest Coca-Cola bottling partner in Africa, responsible for around 40% of the continent's total Coca-Cola sales. Globally, they rank as the eighth largest by revenue. Their scale and impact make them a key player in Coca-Cola's operations across Africa.",
//       image: CocaImage,
//       buttonLabel: "View",
//     },
//   ];

//   return (
//     <section className="bg-[--white]">
//       <Mainheader />
//       <div className="work-container px-2 md:px-20 flex flex-col items-center">
//         <h1 className="text-[4rem] text-[--blue] font-bold mb-10">WORKS</h1>

//         {/* Iterate over work items */}
//         {workItems.map((item, index) => (
//           <div key={index} className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 bg-[--pink] p-10 mb-10">
//             <div className="flex-1">
//               <h2 className="text-[2.5rem] text-[--black] font-bold mb-4">{item.title}</h2>
//               <p className="text-[1rem] sm:text-[1.2rem] text-[--black] mb-4">{item.description}</p>
//               <button className="bg-[--yellow] h-[50px] w-[120px] text-[--black] font-semibold">
//                 {item.buttonLabel}
//               </button>
//             </div>

//             {/* Client logo */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px]"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Work;



import React, { useState } from "react";
import Mainheader from '../Aboutheader/Mainheader';
import CocaImage from "../../asset/cocacola.png"; // Adjust the import path to match your project structure
import WorkDetail from './WorkDetail'; // Import the WorkDetail component

const Work = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const workItems = [
    {
      title: "Holland Milk",
      description:
        "Holland Dairy is a top provider of premium dairy products in Ethiopia, known for their high-quality milk and yogurt. They are trusted for freshness and superior taste, leading the market in dairy innovation.",
      image: CocaImage,
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
      title: "Coca Cola Africa",
      description:
        "They are the largest Coca-Cola bottling partner in Africa, responsible for around 40% of the continent's total Coca-Cola sales. Globally, they rank as the eighth largest by revenue. Their scale and impact make them a key player in Coca-Cola's operations across Africa.",
      image: CocaImage,
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
    <section className="bg-[--white]">
      <Mainheader />
      
      {selectedWork ? (
        // Render the WorkDetail component if a work is selected
        <WorkDetail selectedWork={selectedWork} onBack={handleBackClick} />
      ) : (
        // Render the list of works if no work is selected
        <div className="work-container px-2 md:px-20 flex flex-col items-center">
          <h1 className="text-[4rem] text-[--blue] font-bold mb-10">WORKS</h1>

          {workItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 bg-[--pink] p-10 mb-10"
            >
              <div className="flex-1">
                <h2 className="text-[2.5rem] text-[--black] font-bold mb-4">{item.title}</h2>
                <p className="text-[1rem] sm:text-[1.2rem] text-[--black] mb-4">{item.description}</p>
                <button 
                  className="bg-[--yellow] h-[50px] w-[120px] text-[--black] font-semibold"
                  onClick={() => handleViewClick(item)}
                >
                  {item.buttonLabel}
                </button>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="sm:w-[120px] sm:h-[120px] w-[100px] h-[100px]"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Work;
