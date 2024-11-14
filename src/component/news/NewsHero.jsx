//import "../styles/News.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DodaiNews from '../../asset/dodai.jpeg';

const boxData = [
  {
    imageSrc: DodaiNews,
    title: 'Dodai and EIH',
    description: 'In an event held on October 21 2024 at the Hyatt Regency, Dodai and Ethiopian Investment Holdings (EIH) announced a transformative partnership aimed at accelerating the growth of sustainable transportation in the country.',
  },
  {
    imageSrc: "",
    title: '',
    description: '',
  },
  {
    imageSrc: "",
    title: '',
    description: '',
  },
  {
    imageSrc: "",
    title: '',
    description: '',
  },
];

const NewsHero = () => {
  const [mainContent, setMainContent] = useState(boxData[0]);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleImageClick = (index, box) => {
    setActiveIndex(activeIndex === index ? null : index);
    setMainContent(box);
  };

  const handleViewAllClick = () => {
    // Navigate to the full news detail page
    navigate('/news-detail', { state: { newsContent: mainContent } });
  };

  return (
    <section className="news-wrapper bg-[--white] p-10" style={{ backgroundColor: '#fff6f9' }}>
      <div className="news-container border-solid border-[1px] flex flex-col md:flex-row justify-center items-start p-0 h-[500px] md:h-[600px]">
        
        {/* Main content area */}
        <div className='relative flex flex-col justify-end items-center w-full md:w-2/3 h-full overflow-hidden rounded-xl'>
          <img src={mainContent.imageSrc} alt="news" className='w-full h-full object-cover rounded-xl' />
          
          {/* Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-[5] rounded-xl"></div>

          {/* Text over the image */}
          <div className='absolute bottom-0 left-0 w-full flex flex-col items-start text-left p-4 z-10 rounded-xl'>
            <h2 className='text-[1.2rem] md:text-[2rem] font-[700] text-white md:text-white'>
              {mainContent.title}
            </h2>
            <p className='text-[0.8rem] md:text-[1rem] text-white bg-[rgba(0,0,0,0.4)] p-2 rounded'>
              {mainContent.description}
            </p>
            <div className='flex justify-end'>
  <button
    onClick={handleViewAllClick}
    className='text-white rounded'>
    Read All
  </button>
</div>

          </div>
        </div>

        {/* Vertical stack of clickable images with scaling effect */}
        <div className='md:flex w-full md:w-1/3 h-full relative mt-4 md:mt-0'>
          {boxData.map((box, index) => (
            <div 
              key={index} 
              className={`cursor-pointer relative border border-[--black1] p-4 text-center rounded-[1rem] hover:shadow-lg flex-grow flex items-center justify-center transition-transform duration-300`}
              onClick={() => handleImageClick(index, box)}
              style={{ 
                zIndex: boxData.length - index,
                transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)', 
                margin: '0 -10px',
              }}
            >
              <img 
                src={box.imageSrc} 
                alt={box.title} 
                className={`absolute inset-0 w-full h-full object-cover rounded-[1rem] ${activeIndex !== index ? 'blur-sm' : ''}`}
              />
              <div className={`absolute inset-0 bg-yellow-400 opacity-30 rounded-[1rem] ${activeIndex !== index ? 'blur-sm' : ''}`} />
              <p className='absolute top-0 left-0 m-4 text-white font-semibold bg-black bg-opacity-50 p-2 rounded'>
                0{index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
