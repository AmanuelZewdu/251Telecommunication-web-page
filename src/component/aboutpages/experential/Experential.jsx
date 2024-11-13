import React from 'react'
import Header from '../../header/Header'
// import '../../styles/Expermental.css'
import Aboutheader from '../../Aboutheader/Aboutheader'
import Mainheader from '../../Aboutheader/Mainheader'
import image from '../../../asset/Experential.png'
const Experential = () => {
  return (
    <><Mainheader />
    <section className='bg-[--white] overflow-x-hidden'>
      {/* <Mainheader /> */}

      <div >
    <img src={image} alt="" />
  </div>
      <p>

      </p>

    </section></>
    
  )
}

export default Experential;