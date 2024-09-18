import React, { useState } from 'react'
import NewsImage from '../../asset/news.jpg'
const boxData = [
  {
    imageSrc: NewsImage,
    title: 'How to start a business',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla quisquam deleniti necessitatibus facere pariatur, nisi modi aut optio quibusdam molestiae sint, sed ipsa! Debitis voluptas ea quisquam dignissimos repudiandae.',
  },
  {
    imageSrc: NewsImage,
    title: 'Partnership tips',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla quisquam deleniti necessitatibus facere pariatur, nisi modi aut optio quibusdam molestiae sint, sed ipsa! Debitis voluptas ea quisquam dignissimos repudiandae.',
  },
  {
    imageSrc: NewsImage ,
    title: 'Manage your business',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla quisquam deleniti necessitatibus facere pariatur, nisi modi aut optio quibusdam molestiae sint, sed ipsa! Debitis voluptas ea quisquam dignissimos repudiandae.',
  },
  {
    imageSrc: NewsImage ,
    title: 'Stay successful',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla quisquam deleniti necessitatibus facere pariatur, nisi modi aut optio quibusdam molestiae sint, sed ipsa! Debitis voluptas ea quisquam dignissimos repudiandae.',
  },
];

const NewsHero = () => {
   // State for the main content area
   const [mainContent, setMainContent] = useState(boxData[0]);
  
  return (
    <section className="news-wrapper bg-[--white]">
   <div className="news-container flex justify-center overflow-x-hidden items-start p-10 gap-4">
      
      {/* Main content area */}
      <div className='relative flex flex-col justify-center items-center w-1/2 h-auto'>
        {/* Main image */}
        <img src={mainContent.imageSrc} alt="news" className='w-full h-auto object-cover' />
        
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-auto bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-[5]"></div>
        
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

      {/* Sidebar with 4 boxes */}
      <div className='flex gap-4 w-1/2'>
        {boxData.map((box, index) => (
          <div 
            key={index} 
            className='cursor-pointer border border-gray-300 p-4 text-center rounded-md hover:shadow-lg' 
            onClick={() => setMainContent(box)}
          >
            <img src={box.imageSrc} alt={box.title} className='w-full h-32 object-cover rounded-md mb-2' />
            <h4 className='text-[1.2rem] font-[600] mb-1'>{box.title}</h4>
            <p className='text-[--black1] text-[0.7rem]'>{box.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default NewsHero
