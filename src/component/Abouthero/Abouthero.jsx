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
        { id: 1, name: 'Addis Alemayehu', imgSrc: Addis, role: 'Chairman', 
        description: 'Addis Alemayehu is the Chairman of Kazana and the Founder & Managing Partner of 251 Communications in Addis Ababa, Ethiopia. He also founded Paconet Media PLC, launching Ethiopias first private English FM station (105.3 AFRO FM), and co-founded Kana Television, a pioneering entertainment channel. Additionally, he is involved with Brand Africa, a pan-African movement promoting a positive African identity and competitiveness.'
     },
        { id: 2, name: 'Fantawork Samuel', imgSrc: Fantish, role: 'CEO', description: 'Fantawork brings a wealth of experience in strategic marketing, brand development, and stakeholder engagement. With a proven track record of managing cross-functional teams and driving successful business outcomes, she is a highly respected leader. As CEO of 251 Communications, her focus is on innovation, growth, and elevating brands within the Ethiopian and international markets.'
     },
    //     { id: 3, name: 'John Kimani', imgSrc: Jhon, role: 'Creative Director ', description: 'A seasoned Creative Director with 18 years of experience, John has collaborated with renowned brands like Guinness, Visa, Diageo, and Absa Bank. His award-winning work spans multiple countries, including South Africa, Tanzania, Uganda, India, Dubai, and currently Ethiopia.'
    //  },
        { id: 4, name: 'Naod Mulu', imgSrc: Naod, role: 'Art Director ',description: 'He brings a unique blend of creativity and technical expertise, shaping impactful visuals for leading Ethiopian brands. His ability to lead creative campaigns across diverse sectors has positioned him as a key contributor to innovative marketing strategies at 251 Communications.'
    },
        { id: 5, name: 'Bamlak Abebayehu', imgSrc: Bamlak, role: 'Digital Lead ', description: 'A dynamic digital lead with a strong tech background, he has a proven track record in digital transformation and user engagement. Known for wearing many hats and supporting every department, he is a great leader passionate about merging creativity with analytics to drive innovation.'
     },
        { id: 6, name: 'Michael Mekonnen', imgSrc: Michael, role: 'Account Director ', description: 'Michael Mekonne manages client relationships and ensures the successful execution of communication strategies at 251 Communications. With experience spanning technology, healthcare, and entertainment, he plays a pivotal role in driving business growth and maintaining client satisfaction.'
     },
     { id: 7, name: 'Binyam Lemma ', imgSrc: Biniam, role: 'Event & BTL Manager', description: 'As Experiential expert, specializes in Below the Line (BTL) marketing, delivering memorable brand experiences. His expertise in leading teams and executing high-impact projects ensures that every activation leaves a lasting impression on both clients and audiences.'
    
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
      <div className="about-container p-[40px] md:px-[80px]">
        <div className="team-container flex flex-col">
  

{!selectedMember && (
  <div className="flex justify-center items-center text-center">
    <h1 
      className="text-[2.5rem] md:text-[3rem] text-[--white] font-[100]" 
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      OUR TEAM, OUR GREATEST ASSET
    </h1>
  </div>
)}


          {/* <div className="flex flex-col mt-16">
            <div className="image-container flex flex-wrap md:flex-nowrap mt-10 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col gap-2 items-center p-0 m-0 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(member)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={member.imgSrc} alt={member.name} className="h-[400px] object-cover rounded-none" />
                  <span className="text-[--white] text-[1.1rem] md:text-[1.3rem] font-[700]">{member.name}</span>
                </div>
              ))}
            </div>
          </div> */}
          <div className="flex flex-col mt-16">
  <div className="image-container flex flex-wrap md:flex-nowrap mt-10 gap-8">
    {teamMembers.map((member) => (
      <div
        key={member.id}
        className="flex flex-col gap-2 items-center p-0 m-0 cursor-pointer"
        onMouseEnter={() => handleMouseEnter(member)}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={member.imgSrc}
          alt={member.name}
          style={{
            height: '400px',
            objectFit: 'cover',
            borderRadius: '0',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
<span className="text-[--white] text-[1.1rem] md:text-[1.3rem] font-[300]">
  {member.name.split(" ")[0]} <br /> {member.name.split(" ").slice(1).join(" ")}
</span>

      </div>
    ))}
  </div>
</div>


          {/* Conditional rendering of the selected member card */}
          {selectedMember && (
            <div className="w-full px-20 h-full flex justify-center items-center bg-[--black-opacity]">
              <div className="bg-[black] relative border-solid border-[1px] border-[--white] flex gap-8 p-8 rounded-lg">
                <div className=''>
                  <h2 className="text-[2rem] text-[--yellow] font-[700]">{selectedMember.name}</h2>
                  <p className="text-[1.5rem] text-[--white]">{selectedMember.role}</p>
                </div>
                <div className="border-[1px] border-[--white] h-auto"></div>
                <p className='text-[1rem] text-[--white]'>{selectedMember.description}</p>
                <button onClick={handleMouseLeave} className="text-[--white] absolute top-0 right-0 p-2 px-4">x</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Abouthero;
