import Mainheader from "../Aboutheader/Mainheader";
import datas from "../../asset/data/Jobdata.json";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import ETCarExpo from '../../asset/ET_car_expo.png';

const Event = ( {data}) => {
    const eventData = [
        {
          title: '',
          description: '',
          backgroundImageUrl: ETCarExpo,
        },
       
      ];
  return (
    <section >
      <Mainheader />
      {eventData.map((event, index) => (
 <section>
 <div className='bg-[--white] overflow-x-hidden'>
<img src={event.backgroundImageUrl} alt="" />
</div>
</section>
      ))}
   
      <Footer/>
    </section>
  );
};

export default Event;