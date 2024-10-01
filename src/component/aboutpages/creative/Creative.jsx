import React from 'react';
import Aboutheader from '../../Aboutheader/Aboutheader';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Creativeimg from '../../../asset/creative-img2.png';
import CocaImage from '../../../asset/cocacola.png';
import Mainheader from '../../Aboutheader/Mainheader';
import '../../styles/Creative.css';

const Creative = () => {
  
  const location = useLocation();

  return (
    <section className="creative-wrapper bg-[--white] text-[--black] p-0 min-h-[100vh] flex flex-col">
      <Mainheader />
      <div className="creative-container flex w-[100%] px-10">
        <img className='' width={1000} src={Creativeimg} alt="creative" />
        <div className='p-4 flex w-[80%] md:w-[50%] absolute mt-[15%] md:ml-[45%] flex-col gap-4'>
          <p className='text-[--brown] text-[1rem]'>
            We offer comprehensive creative services for enhanced communication and marketing.
          </p> 
          <p className='text-[--brown] text-[1rem]'>
            From brand development to website design, our team excels in crafting compelling content and visuals.
            Specializing in branding and identity development, we ensure a consistent brand image across all channels.
          </p>
          <p className='text-[--brown] text-[.8rem] sm:text-[1rem]'>
            With expertise in digital, social management, and more, we strengthen brand presence effectively.
          </p>
        </div>
      </div>

      <div className='work-container m-16 sm:mt-auto px-2 py-10 md:p-20 flex flex-col'>
        <h1 className='text-[4rem] text-[--blue] font-[700]'>WORKS</h1>
        <div className='flex flex-col sm:flex-row w-full justify-center align-middle items-center gap-6 bg-[--pink] p-10'>
          <div>
            <h1 className='text-[2rem] font-[700] text-[--black]'>Holland Milk</h1>
            <p className='text-[.7rem] sm:text-[.9rem]'>
              Holland Dairy is a top provider of premium dairy products in Ethiopia, known for their high-quality milk and yogurt. 
              They are trusted for freshness and superior taste, leading the market in dairy innovation.
            </p>
          </div>
          <img src={CocaImage} alt="coca" className='sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]' />
          <button className='bg-[--yellow] h-[50px] sm:px-[2.5rem] px-[2rem]'>View</button>
        </div>

        <div className='flex w-full flex-col lg:flex-row gap-6 mt-10 justify-center items-center'>
          <div className='flex flex-col sm:flex-row items-center bg-[--pink] p-6 gap-8'>
            <div>
              <h1 className='sm:text-[2rem] text-[1.8rem] font-[700] text-[--black]'>Coca cola Africa</h1>
              <p>
                They are the largest Coca-Cola bottling partner in Africa, responsible for around 40% of the continent's total Coca-Cola sales. 
                Globally, they rank as the eighth largest by revenue. Their scale and impact make them a key player in Coca-Cola's operations across Africa.
              </p>
            </div>
            <div className='flex flex-col gap-8'>
              <img src={CocaImage} alt="coca" className='sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]' />
              <button className='bg-[--yellow] h-[40px] sm:px-[2.5rem] px-[2rem]'>View</button>
            </div>
          </div>
          
          {/* Duplicate section for Coca Cola Africa */}
          <div className='flex flex-col sm:flex-row items-center bg-[--pink] p-6 gap-8'>
            <div>
              <h1 className='sm:text-[2rem] text-[1.8rem] font-[700] text-[--black]'>Coca cola Africa</h1>
              <p>
                They are the largest Coca-Cola bottling partner in Africa, responsible for around 40% of the continent's total Coca-Cola sales. 
                Globally, they rank as the eighth largest by revenue. Their scale and impact make them a key player in Coca-Cola's operations across Africa.
              </p>
            </div>
            <div className='flex flex-col gap-8'>
              <img src={CocaImage} alt="coca" className='sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]' />
              <button className='bg-[--yellow] h-[40px] sm:px-[2.5rem] px-[2rem]'>View</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;