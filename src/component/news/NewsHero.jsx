import React, { useState } from 'react';
import NewsImage from '../../asset/news.jpg';
import CreativeImage from '../../asset/creative-img.png';
import DigitalImage from '../../asset/digital-img.png';

const boxData = [
  {
    imageSrc: NewsImage,
    title: 'How to start a business',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla quisquam deleniti necessitatibus facere pariatur, nisi modi aut optio quibusdam molestiae sint, sed ipsa! Debitis voluptas ea quisquam dignissimos repudiandae.',
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

        {/* Sidebar with 4 boxes, hidden on smaller screens */}
        <div className='hidden md:flex p-[-10px] w-1/3 h-full'>
          {boxData.map((box, index) => (
            <div 
              key={index} 
              className={`cursor-pointer relative border border-[--black1] p-8 text-center rounded-[1rem] hover:shadow-lg flex-grow flex items-center justify-center ${index > 0 ? '-ml-[0px]' : ''}`}
              onClick={() => setMainContent(box)}
              style={{ zIndex: boxData.length - index }} // Ensure the top box overlaps the lower boxes
            >
              <p className='absolute top-0 left-0 m-4'>0{index + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical list of news items for mobile view */}
      <div className='md:hidden mt-4 overflow-auto'>
        <div className="flex flex-col">
          {boxData.map((box, index) => (
            <div 
              key={index} 
              className="cursor-pointer border border-[--black1] p-4 mb-4 rounded-md hover:shadow-lg"
              onClick={() => setMainContent(box)}
            >
              <img src={box.imageSrc} alt={box.title} className='w-full h-32 object-cover mb-2 rounded-md' />
              <h3 className='text-lg font-semibold'>{box.title}</h3>
              <p className='text-gray-600'>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsHero;