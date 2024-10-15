import React from 'react'
import Header from '../../header/Header'
import '../../styles/Production.css'
import Aboutheader from '../../Aboutheader/Aboutheader'
// const Production = () => {
//   return (
//     <section className='production-container p-0 m-0'>
//         {/* <Header />  */}
        
//         <p>
          
//         </p>
    
//     </section>
    
//   )
// }

// export default Production
// import React from 'react'
// import '../../styles/Production.css'



const Production = () => {
  return (
    <section className="production-container p-10 m-0">
      <div className="production-content-wrapper">
        {/* Text Content */}
        <div className="production-text">
          <p>
            Our production services are expertly tailored to bring your most ambitious creative ideas to life with precision and a high level of professionalism. Whether it’s captivating audiovisual content, event management, or powerful campaign execution, our team combines innovation and expertise to meet your production needs and deliver results that surpass expectations.
          </p>
        </div>

        {/* Image */}
        {/* <div className="production-image">
          <img src="/" alt="Production" />
        </div> */}
      </div>
    </section>
  );
}

export default Production;
