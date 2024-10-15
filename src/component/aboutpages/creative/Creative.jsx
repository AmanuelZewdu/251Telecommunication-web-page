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
      {/* <Mainheader /> */}
      <div className='flex flex-col md:flex-row items-center justify-center w-full'>

  <img
    className='w-[90%] md:w-[40%] h-auto'  
    src={Creativeimg}
    alt="creative"
  />

 
  <div className='p-4 w-full md:w-[50%] flex flex-col gap-4'>
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


    
    </section>
  );
};

export default Creative;