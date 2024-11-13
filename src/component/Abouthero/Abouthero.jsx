import React, { useState } from 'react';
import Addis from '../../asset/Addis.jpg';
import Bamlak from '../../asset/Bamlak.png';
import Jhon from '../../asset/Jhon.png';
import Naod from '../../asset/Naod.png';
import Michael from '../../asset/Michael.png';
import Biniam from '../../asset/Biniam.png';
import Fantish from '../../asset/fantish.png';
import Mission from '../../asset/Mission.png';
import Vision from '../../asset/Vision.png';
import Values from '../../asset/Values.png';
import Expermental from '../aboutpages/expermental/Expermental';
import MissionVisionValues from '../../component/MissionVisionValues/MissionVisionValues';

const Abouthero = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Addis Alemayehu',
      imgSrc: Addis,
      role: 'Chairman',
      description:
        'Addis Alemayehu is the Chairman of Kazana and the Founder & Managing Partner of 251 Communications in Addis Ababa, Ethiopia. He also founded Paconet Media PLC, launching Ethiopia’s first private English FM station (105.3 AFRO FM), and co-founded Kana Television, a pioneering entertainment channel. Additionally, he is involved with Brand Africa, a pan-African movement promoting a positive African identity and competitiveness.',
    },
    {
      id: 2,
      name: 'Fantawork Samuel',
      imgSrc: Fantish,
      role: 'CEO',
      description:
        'Fantawork brings a wealth of experience in strategic marketing, brand development, and stakeholder engagement. With a proven track record of managing cross-functional teams and driving successful business outcomes, she is a highly respected leader. As CEO of 251 Communications, her focus is on innovation, growth, and elevating brands within the Ethiopian and international markets.',
    },
    {
      id: 4,
      name: 'Naod Mulu',
      imgSrc: Naod,
      role: 'Art Director',
      description:
        'He brings a unique blend of creativity and technical expertise, shaping impactful visuals for leading Ethiopian brands. His ability to lead creative campaigns across diverse sectors has positioned him as a key contributor to innovative marketing strategies at 251 Communications.',
    },
    {
      id: 5,
      name: 'Bamlak Abebayehu',
      imgSrc: Bamlak,
      role: 'Digital Lead',
      description:
        'A dynamic digital lead with a strong tech background, he has a proven track record in digital transformation and user engagement. Known for wearing many hats and supporting every department, he is a great leader passionate about merging creativity with analytics to drive innovation.',
    },
    {
      id: 6,
      name: 'Michael Mekonnen',
      imgSrc: Michael,
      role: 'Account Director',
      description:
        'Michael Mekonnen manages client relationships and ensures the successful execution of communication strategies at 251 Communications. With experience spanning technology, healthcare, and entertainment, he plays a pivotal role in driving business growth and maintaining client satisfaction.',
    },
    {
      id: 7,
      name: 'Binyam Lemma',
      imgSrc: Biniam,
      role: 'Event & BTL Manager',
      description:
        'As an experiential expert, specializes in Below the Line (BTL) marketing, delivering memorable brand experiences. His expertise in leading teams and executing high-impact projects ensures that every activation leaves a lasting impression on both clients and audiences.',
    },
  ];
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMouseEnter = (member) => {
    setSelectedMember(member);
  };

  const handleMouseLeave = () => {
    setSelectedMember(null);
  };

  return (
    <section className="about-wrapper">
      <Expermental />
      <MissionVisionValues />
      <div className="about-container p-4 md:px-20">
        <div className="team-container">
          {!selectedMember && (
            <div className="flex justify-center items-center text-center mb-4">
              <h1 className="text-xl md:text-2xl text-white font-light" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                OUR TEAM, OUR GREATEST ASSET
              </h1>
            </div>
          )}

          <div className="image-container flex flex-wrap justify-center gap-4 md:flex-nowrap md:justify-between">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center cursor-pointer w-32 sm:w-40 md:w-48 lg:w-64"
                onMouseEnter={() => handleMouseEnter(member)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="team-image h-50 w-32 sm:h-58 sm:w-40 md:h-66 md:w-40 lg:h-82 lg:w-48 object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
                  
                />
                <span className="text-white text-xs sm:text-sm md:text-base font-light text-center">
                  {member.name.split(" ")[0]} <br /> {member.name.split(" ").slice(1).join(" ")}
                </span>
              </div>
            ))}
          </div>

          {selectedMember && (
            <div className="w-full p-2 md:px-10 h-full flex justify-center items-center bg-black/70 mt-4 rounded-md">
              <div className="bg-black relative border border-white flex flex-col md:flex-row gap-2 md:gap-4 p-2 md:p-6 rounded-lg max-w-3xl selected-member-container">
                <div>
                  <h2 className="text-lg md:text-xl text-yellow-500 font-bold">{selectedMember.name}</h2>
                  <p className="text-xs md:text-sm text-white">{selectedMember.role}</p>
                </div>
                <div className="border-b md:border-r md:border-b-0 border-white my-1 md:my-0"></div>
                <p className="text-xs md:text-sm text-white">{selectedMember.description}</p>
                <button onClick={handleMouseLeave} className="text-white absolute top-1 right-1 p-1 px-2 bg-red-600 rounded-full">
                  x
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Abouthero;
