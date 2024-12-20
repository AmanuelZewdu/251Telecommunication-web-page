import Mainheader from "../Aboutheader/Mainheader";
import datas from "../../asset/data/Jobdata.json";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
const Carer = ( {data}) => {
  return (
    <section className="bg-[--white] " style={{ backgroundColor: '#fff6f9'}}>
      <Mainheader />
      <div className="carer-container p-20">
        <div className="carer-text ">
          <h2 className="text-[--black] md:text-[2.5rem] text-[2rem] font-[1000]">
            Welcome To 251 COMMUNICATIONS
          </h2>
          <h2 className="text-[--yellow] text-[2rem] font-[1000] tracking-[.5rem]">
            JOB OPENINGS
          </h2>
        </div>
        {data.length === 0 ? (
 <div className="text-center mt-8">
 <p className="text-[--black1] text-black text-left rounded font-[400]"  style={{ fontFamily: 'Montserrat, sans-serif' }} > 
   Thank you for your interest in joining our team. <br /> Currently, we are not hiring, but we encourage you to check back in the future for any potential opportunities.
 </p>
</div>

) : (
  data.map((data, i) => (
    <div className="apply-container flex-col" key={i}>
      <div className="relative table-container flex-col items-center align-middle p-2 mt-8 after:contents-'' after:h-[2px] after:w-[100%] after:bg-[--black] after:absolute">
        <h2 className="text-[--black] text-[2rem] font-bold">
          {data.title}
        </h2>
        <div className="flex align-middle flex-col gap-6 md:gap-0 md:flex-row md:items-center justify-between p-6">
          <h3 className="text-[1.2rem] text-[--black1] w-[100%]">{data.department}</h3>
          <h3 className="text-[1.2rem] text-[--black1] w-[100%]">{data.locationType}</h3>
          <h3 className="text-[1.2rem] text-[--black1] w-[100%]">{data.positionType}</h3>
          <Link to={`/career/apply/${data._id}`}>
            <button className="border-solid border-[--yellow] border-[1px] p-4">APPLY</button>
          </Link>
        </div>
      </div>
    </div>
  ))
)}

      </div>
      <Footer/>
    </section>
  );
};

export default Carer;