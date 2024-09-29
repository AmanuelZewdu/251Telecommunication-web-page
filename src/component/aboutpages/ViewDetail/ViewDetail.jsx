import React from 'react'
import CocacolaImage from '../../../asset/cocacola.png'
const ViewDetail = () => {
  return (
    <section className='bg-white'>
      <div className='viewdetail-container p-10'>
       <div className='flex justify-between px-10  items-center align-middle'>
        <div className='flex-col flex gap-4 '>
       <h1 className='text-[--black] text-[3rem] font-[700]'>Coca Cola</h1>
       <p className='w-[50%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, excepturi! Repudiandae earum, et ipsam distinctio repellendus porro asperiores minima quidem, molestiae at quo iure doloremque ullam facere, dolore cum maxime.</p>
       </div>
       
        <div className=' m-4'>
       <img src={CocacolaImage} alt="coca" className=' ' />
       </div>
       </div>
      </div>
      </section>
  )
}

export default ViewDetail