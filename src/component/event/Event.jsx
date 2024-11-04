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
    <section className="bg-[--white]">
      <Mainheader />
      {eventData.map((event, index) => (
        <section
          key={index}
          className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${event.backgroundImageUrl})`,
          }}
        >
          {/* <div className="bg-black bg-opacity-50 p-8 text-center rounded-lg max-w-3xl">
            <h1 className="text-white text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-white text-lg">{event.description}</p>
          </div> */}
        </section>
      ))}
   
      <Footer/>
    </section>
  );
};

export default Event;