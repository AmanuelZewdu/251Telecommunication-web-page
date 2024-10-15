import React from 'react';

const WorkDetail = ({ selectedWork, onBack }) => {
  if (!selectedWork) return null;

  return (
    <section className="work-detail-container p-10 bg-[--white]">
    
      
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <img 
          src={selectedWork.image} 
          alt={selectedWork.title} 
          className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
        />
        
        <div className="flex-1">
          <h1 className="text-[3rem] text-[--black] font-bold mb-4">{selectedWork.title}</h1>
          <p className="text-[1.2rem] text-[--black] mb-4">{selectedWork.description}</p>
          
          <h2 className="text-[2rem] text-[--blue] font-bold mt-6">Campaign Details</h2>
          <p className="text-[1rem] text-[--black] mt-4">
            {/* Add more detailed information here */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>
      </div>
      <button className="bg-[--blue] text-white px-6 py-2 mb-10" onClick={onBack}>
        Back
      </button>
    </section>
  );
};

export default WorkDetail;
