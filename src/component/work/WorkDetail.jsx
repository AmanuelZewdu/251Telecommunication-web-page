import React from 'react';
import upIcon from "../../asset/251_UpIcon.png"

const WorkDetail = ({ selectedWork, onBack }) => {
  if (!selectedWork) return null;

  return (
    <section className="work-detail-container p-10 bg-[--white]">
    <div className="flex justify-center items-center">
        <img 
          src={selectedWork.image} 
          alt={selectedWork.title} 
          className="w-full h-full object-cover"
        />
    </div>
    <button 
            className="h-[120px] w-[120px] text-[--black] font-semibold bg-center relative ml-auto"
            style={{
              backgroundImage: `url(${upIcon})`, // Your circular image
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              borderRadius: '50%', // Circular button
            }}
            onClick={onBack}
          
          >
            {/* Optional content inside the button */}
          </button>
</section>
    // <section className="work-detail-container p-10 bg-[--white]">
    
      
    //   <div className="lg:flex-row gap-8 items-center">
    //     <img 
    //       src={selectedWork.image} 
    //       alt={selectedWork.title} 
         
    //     />
        
     
    //   </div>
    //   <button className="bg-[--blue] text-white px-6 py-2 mb-10" onClick={onBack}>
    //     Back
    //   </button>
    // </section>
  );
};

export default WorkDetail;
