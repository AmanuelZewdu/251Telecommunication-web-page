import React from 'react'
import Mainheader from '../../Aboutheader/Mainheader'
import { NavLink, useLocation } from 'react-router-dom'
import '../../styles/Research.css'
const Research = () => {
    const location = useLocation();
    return (
    <section className="research-wrapper bg-[--white]  bg-cover text-[--black] p-0" >
     {/* <Mainheader /> */}
     <div className="reasearch-container p-4 m-0 md:p-0">
 
        </div>

    </section>
  )
}

export default Research