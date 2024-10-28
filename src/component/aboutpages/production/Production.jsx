import React from 'react'
import Header from '../../header/Header'
import '../../styles/Production.css'
import Aboutheader from '../../Aboutheader/Aboutheader'
import OverlayImage from '../../../asset/PlayIcon-01.png'



const Production = () => {
  return (
  
      <section className="production-container p-10 m-0">
  <div className="production-content-wrapper flex flex-col items-center">
  {/* <img
          src={OverlayImage}
          alt="Overlay"
          className="overlay-image"
          style={{
            position: 'absolute', // Positioning for overlay effect
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the image
            zIndex: 1, // Ensure the image is above other content
            width: '80%', // Adjust size as needed
            height: 'auto', // Maintain aspect ratio
          }}
        /> */}
  </div>
</section>
  );
}

export default Production;
