import React from 'react';
import Aboutheader from '../../Aboutheader/Aboutheader';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Creativeimg from '../../../asset/Creatives.png';
import CocaImage from '../../../asset/cocacola.png';
import Mainheader from '../../Aboutheader/Mainheader';

import image from '../../../asset/Creatives.png'

const Creative = () => {
  return (
<section>
      <div className='bg-[--white] overflow-x-hidden'>
    <img src={image} alt="" />
  </div>
</section>
  );
};

export default Creative;