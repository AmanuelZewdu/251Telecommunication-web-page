
// import React, { useState } from 'react'
// import '../styles/Contacthero.css'
// import axios from '../../api/axios'
// import Header from '../header/Header'
// const Contacthero = () => {
//    const CONTACT_URL= '/contact'
//   const [full_name, setFullName] = useState('')
//    const [email, setEmail] = useState('')
//    const [message, setMessage] = useState('')
//   const handleSubmit = async (event) => {
//     event.preventDefault()
//      try {
//       const response = axios.post(CONTACT_URL, 
//         JSON.stringify({full_name, email, message}),
//         {
//           headers:{
//             "Content-Type": 'application/json'
//           }
//         }
//         )
//         console.log(response.data)
//         alert("emailed sucessfully")
//      } catch (error){
//       console.log(error)
//      }
//     }
      
    
  
  
  
  
//   return (
//     <section className="contact-wrapper overflow-x-hidden">
//         <Header />
//       <div className="contact-container flex flex-col lg:flex-row items-center p-2 sm:p-10 py-20 justify-center">
    
      
//       <div className="contact-left flex flex-col p-4 md:p-10 gap-4" style={{ paddingLeft: '2rem' }}>
//   <div className="contact-left-top flex items-center justify-center gap-12 px-6  align-middle">
//     <h1 className='md:text-[5.5rem] sm:text-[4.5rem] text-[3rem] leading-[4rem] text-[--white] font-[1000] md:leading-[4.2rem]'>
//       NOW <br /> WE'RE<br />TALKING
//     </h1>
//     <h2 className='text-[--white] md:text-[10rem] text-[6rem] sm:text-[8rem] font-[1000] mb-4'>{'>'}</h2>
//   </div>
//   <p className='text-[--white] font-[bold] w-full text-[.5rem] sm:text-[.8rem] sm:w-[70%] pl-14'>
//     WE SEEK PASSIONATE COLLABORO-CLIENTS DEDICATED TO THEIR PRODUCTS AND CUSTOMERS. REQUEST A CALL BACK AND TALENTED
//     INDIVIDUALS STRIVING FOR EXCELLENCE. CONTACT US FOR BUSINESS, PRESS, AND LET'S CREATE REMARKABLE WORK TOGETHER.
//   </p>
// </div>



//       <div className="contact-right  flex-col justify-between  flex gap-2 mr-[10%] p-10">
//         <h3 className='text-[--white] font-[700]'>Contact Us Today</h3>
//          <form className='flex-col justify-end text-[1rem] flex gap-4' onSubmit={handleSubmit}>
//          <input className='md:w-[18rem]  w-[20rem] p-2 border-none' required type='text' placeholder='Name' onChange={e => {setFullName(e.target.value)}}  />
//          <input className='md:w-[18rem]  w-[20rem]  p-2  border-none' required type='text' placeholder='Email' onChange={e => {setEmail(e.target.value)}} />
//          <input className='md:w-[18rem]  w-[20rem]  p-2 h-[6rem]  border-none'  required type='text' placeholder='Your MESSAGE' onChange={e => {setMessage(e.target.value)}} />
//          <button className='bg-[--yellow] text-[1rem] w-[20rem] p-2 md:w-[18rem] text-[--white]'>REQUEST A CALL BACK</button>
//          </form> 
//       </div>
//       </div>

//       <div className='flex flex-col gap-2 p-16'>
//           <p className='text-[--white1]'>Powered by <u>Cloud 251</u></p> 
//           <h3 className='text-[--white]'>Privacy Policy  ©2024</h3>
//          </div>
//     </section>
//   )
// }

// export default Contacthero
import React, { useState } from 'react';
import '../styles/Contacthero.css';
import axios from '../../api/axios';
import Header from '../header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';




const Contacthero = () => {
  const CONTACT_URL = '/contact';
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(CONTACT_URL, 
        JSON.stringify({ full_name, email, message }),
        {
          headers: {
            "Content-Type": 'application/json',
          },
        }
      );
      console.log(response.data);
      alert("Emailed successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="contact-wrapper overflow-x-hidden">
      <Header />

      <div
  className="social-media-links"
  style={{
    position: 'fixed', // Fixed positioning
    top: '20px', // Distance from the top
    right: '20px', // Distance from the right
    backgroundColor: 'white', // White background
    padding: '10px', // Padding around the icons
    borderRadius: '8px', // Optional: for rounded corners
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Optional: shadow effect
    zIndex: 1000, // Ensure it's on top of other elements
    marginTop: '70px'
  }}
>
  <a
    href="https://x.com/251Comms?t=9RKQBGw9DXV_D9sho9UbjQ&s=09"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block', // Stack the links vertically
      margin: '5px 0', // Space between icons
      color: '#000', // Color of the icons
      textDecoration: 'none', // Remove underline
    }}
  >
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a
    href="https://www.linkedin.com/company/251-communications-&-marketing-plc/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      margin: '5px 0',
      color: '#000',
      textDecoration: 'none',
    }}
  >
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a
    href="https://www.facebook.com/share/PvXZUCLbnHdwYJ2i/?mibextid=qi2Omg"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      margin: '5px 0',
      color: '#000',
      textDecoration: 'none',
    }}
  >
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a
    href="https://www.instagram.com/251comms?igsh=MTN4aGlyNTRhZTQ4NA=="
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      margin: '5px 0',
      color: '#000',
      textDecoration: 'none',
    }}
  >
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a
    href=" https://www.tiktok.com/@251comms?_t=8kgy96HUmF3&_r=1"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      margin: '5px 0',
      color: '#000',
      textDecoration: 'none',
    }}
  >
    <FontAwesomeIcon icon={faTiktok} />
  </a>
</div>




      <div className="contact-container flex flex-col lg:flex-row items-center p-2 sm:p-10 py-20 justify-center">
        <div className="contact-left flex flex-col p-4 md:p-10 gap-4" style={{ paddingLeft: '2rem' }}>
          <div className="contact-left-top flex items-center justify-center gap-12 px-6 align-middle">
            <h1 className='md:text-[5.5rem] sm:text-[4.5rem] text-[3rem] leading-[4rem] text-[--white] font-[1000] md:leading-[4.2rem]'
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              NOW <br /> WE'RE<br />TALKING
            </h1>
            <h2 className='text-[--white] md:text-[10rem] text-[6rem] sm:text-[8rem] font-[1000] mb-4'>{'>'}</h2>
          </div>
          {/* <p className='text-[--white] font-[bold] w-full text-[.5rem] sm:text-[.8rem] sm:w-[70%] pl-14'>
            WE SEEK PASSIONATE COLLABORO-CLIENTS DEDICATED TO THEIR PRODUCTS AND CUSTOMERS. REQUEST A CALL BACK AND TALENTED
            INDIVIDUALS STRIVING FOR EXCELLENCE. CONTACT US FOR BUSINESS, PRESS, AND LET'S CREATE REMARKABLE WORK TOGETHER.
          </p> */}
          <p
        className='text-[--white] font-[bold] w-full text-[.5rem] sm:text-[.8rem] sm:w-[70%] pl-14'
        style={{ fontFamily: 'Montserrat, sans-serif' }} // Applying Montserrat font
      >
        WE SEEK PASSIONATE COLLABORO-CLIENTS DEDICATED TO THEIR PRODUCTS AND CUSTOMERS. REQUEST A CALL BACK AND TALENTED
        INDIVIDUALS STRIVING FOR EXCELLENCE. CONTACT US FOR BUSINESS, PRESS, AND LET'S CREATE REMARKABLE WORK TOGETHER.
      </p>
        </div>

        <div className="contact-right flex-col justify-between flex gap-2 mr-[10%] p-10">
          <h3 className='text-[--white] font-[700]'>Contact Us Today</h3>
          <form className='flex-col justify-end text-[1rem] flex gap-4' onSubmit={handleSubmit}>
            <input className='md:w-[18rem] w-[20rem] p-2 border-none' required type='text' placeholder='Name' onChange={e => { setFullName(e.target.value); }} />
            <input className='md:w-[18rem] w-[20rem] p-2 border-none' required type='text' placeholder='Email' onChange={e => { setEmail(e.target.value); }} />
            <input className='md:w-[18rem] w-[20rem] p-2 h-[6rem] border-none' required type='text' placeholder='Your MESSAGE' onChange={e => { setMessage(e.target.value); }} />
            <button className='bg-[--yellow] text-[1rem] w-[20rem] p-2 md:w-[18rem] text-[--white]'>REQUEST A CALL BACK</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col gap-2 p-16'>
        <p className='text-[--white1]'>Powored by <u>Cloud 251</u></p> 
        <h3 className='text-[--white]'>Privacy Policy  ©2024</h3>
      </div>
    </section>
  );
};

export default Contacthero;
