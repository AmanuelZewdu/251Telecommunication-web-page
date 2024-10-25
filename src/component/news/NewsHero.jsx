import React, { useState } from 'react';
import DodaiNews from '../../asset/dodai.jpeg';
import NewsImage from '../../asset/news.jpg';
import CreativeImage from '../../asset/creative-img.png';
import DigitalImage from '../../asset/digital-img.png';

const boxData = [
  {
    imageSrc: DodaiNews,
    title: 'Dodai and EIH',
    description: 'In an event held on October 21 2024 at the Hyatt Regency, Dodai, Ethiopia s leading electric mobility company, and Ethiopian Investment Holdings (EIH), the strategic investment arm of the Government of Ethiopia, announced a transformative partnership aimed at accelerating the growth of sustainable transportation in the country. ',
  },
  {
    imageSrc: DigitalImage,
    title: 'Partnership tips',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla quisquam deleniti necessitatibus facere pariatur, nisi modi aut optio quibusdam molestiae sint, sed ipsa! Debitis voluptas ea quisquam dignissimos repudiandae.',
  },
  {
    imageSrc: CreativeImage,
    title: 'Manage your business',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla quisquam deleniti necessitatibus facere pariatur, nisi modi aut optio quibusdam molestiae sint, sed ipsa! Debitis voluptas ea quisquam dignissimos repudiandae.',
  },
  {
    imageSrc: NewsImage,
    title: 'Stay successful',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla quisquam deleniti necessitatibus facere pariatur, nisi modi aut optio quibusdam molestiae sint, sed ipsa! Debitis voluptas ea quisquam dignissimos repudiandae.',
  },
];

const NewsHero = () => {
  // State for the main content area
  const [mainContent, setMainContent] = useState(boxData[0]);

  return (
    <section className="news-wrapper bg-[--white] p-10">
      <div className="news-container border-solid border-[1px] flex flex-col md:flex-row justify-center overflow-hidden items-start p-0 h-[500px]">
        {/* Main content area */}
        <div className='relative flex flex-col justify-center items-center w-full md:w-2/3 h-full overflow-auto'>
          {/* Main image */}
          <img src={mainContent.imageSrc} alt="news" className='w-full h-full object-cover' />
          
          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-[5]"></div>

          {/* Text over the image */}
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-8 z-10'>
            <h2 className='text-[3rem] font-[700] text-white'>
              {mainContent.title}
            </h2>
            <p className='text-[--black1] text-white bg-[rgba(0,0,0,0.6)] p-4 rounded'>
              {mainContent.description}
            </p>
          </div>
        </div>

       
<div className='hidden md:flex w-1/3 h-full'>
  {boxData.map((box, index) => (
    <div 
      key={index} 
      className={`cursor-pointer relative border border-[--black1] p-8 text-center rounded-[1rem] hover:shadow-lg flex-grow flex items-center justify-center ${index > 0 ? '-ml-[0px]' : ''}`}
      onClick={() => setMainContent(box)}
      style={{ zIndex: boxData.length - index }} // Ensures the top box overlaps the lower boxes
    >
      <img 
        src={box.imageSrc} 
        alt={box.title} 
        className='absolute inset-0 w-full h-full object-cover rounded-[1rem]' // Updated styles for full coverage
      />
      <p className='absolute top-0 left-0 m-4 text-white font-semibold bg-black bg-opacity-50 p-2 rounded'>0{index + 1}</p>
    </div>
  ))}
</div>

      </div>

      {/* Vertical list of news items for mobile view */}
     
    </section>
  )
}

export default NewsHero;
// import React, { useState } from 'react';

// const contentData = [
//   {
//     imageSrc: 'box1-image.jpg',
//     title: 'Box 1 Title',
//     description: 'Box 1 Description',
//     gradientColor: '#E27525',
//   },
//   {
//     imageSrc: 'box2-image.jpg',
//     title: 'Box 2 Title',
//     description: 'Box 2 Description',
//     gradientColor: '#4D142E',
//   },
//   {
//     imageSrc: 'box3-image.jpg',
//     title: 'Box 3 Title',
//     description: 'Box 3 Description',
//     gradientColor: '#EF5147',
//   },
//   {
//     imageSrc: 'box4-image.jpg',
//     title: 'Box 4 Title',
//     description: 'Box 4 Description',
//     gradientColor: '#152D55',
//   },
// ];

// const NewsSection = () => {
//   const [currentBox, setCurrentBox] = useState(0);

//   const showContent = (boxIndex) => {
//     setCurrentBox(boxIndex);
//   };

//   return (
//     <section className="news-wrapper bg-white p-10 mt-5">
//       <div className="news-container flex flex-col md:flex-row justify-center overflow-hidden items-start p-0 h-[500px] transition-all duration-500 ease-in-out">
//         {/* Main content area */}
//         <div
//           id="mainContentArea"
//           className="relative flex flex-col justify-center items-center w-full md:w-2/3 h-full overflow-auto transition-all duration-500 ease-in-out fade-enter"
//         >
//           {/* Main image */}
//           <img
//             id="mainImage"
//             src={contentData[currentBox].imageSrc}
//             alt="news"
//             className="w-full h-full object-cover"
//           />

//           {/* Gradient Overlay */}
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-[5]"></div>

//           {/* Text over the image */}
//           <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-8 z-10">
//             <h2 id="mainTitle" className="text-[3rem] font-[700] text-white">
//               {contentData[currentBox].title}
//             </h2>
//             <p
//               id="mainDescription"
//               className="text-[--black1] text-white bg-[rgba(0,0,0,0.6)] p-4 rounded"
//             >
//               {contentData[currentBox].description}
//             </p>
//           </div>
//         </div>

//         {/* Sidebar with 4 boxes */}
//         <div
//           id="sidebar"
//           className="hidden md:flex w-1/3 h-full transition-all duration-500 ease-in-out"
//         >
//           {contentData.map((content, index) => (
//             <div
//               key={index}
//               id={index + 1}
//               className={`sidebar-item cursor-pointer relative border border-[--black1] text-center rounded-l-[1rem] hover:shadow-lg basis-1/4 flex items-center justify-center overflow-hidden ${
//                 index === currentBox ? 'scale-105 border-4 z-50' : ''
//               }`}
//               onClick={() => showContent(index)}
//             >
//               <p className="absolute top-0 left-0 m-4 z-30 text-white font-semibold text-2xl">
//                 {`0${index + 1}`}
//               </p>
//               <img
//                 className="h-full w-full object-cover z-10"
//                 src={`./images/image${index + 1}.jpg`}
//                 alt={`box ${index + 1}`}
//               />
//               <div
//                 className="absolute inset-0 bg-gradient-to-b from-[60%] to-black z-20 opacity-60"
//                 style={{ background: `linear-gradient(to bottom, ${content.gradientColor} 60%, black)` }}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsSection;