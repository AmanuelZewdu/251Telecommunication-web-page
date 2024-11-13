// import React from 'react'
// import Mainheader from '../../Aboutheader/Mainheader'
// import Slider from "react-slick";

// import PR1 from '../../../asset/PR.jpg'
// import PR2 from '../../../asset/PR.jpg'
// import PR3 from '../../../asset/PR.jpg'
// import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';


// const Pr = () => {

//   return (
//     <section className="pr-wrapper bg-[--white] overflow-x-hidden">
//       {/* <Mainheader />  */}
     
//   <div className='flex items-center justify-center h-[120svh] w-full mx-auto'>
//     <img src={PR1} alt="" />
//   </div>
  

//     </section>
//   )
// }

// export default Pr
import React from 'react'
import PR1 from '../../../asset/PR.jpg'
// import "../../styles/Pr.css"

const Pr = () => {

  return (
    <section className="bg-[--white] overflow-x-hidden">
      <div >
        <img src={PR1} alt="PR Image"  />
      </div>
    </section>
  )
}

export default Pr
