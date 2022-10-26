import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
   
    
    <div className='app__wrapper_info'>
      <SubHeading title ='Chase the new flavour' />
      <h1 className='app__header-h1'> The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>lorem Sid tellus lobortis senectus vivamus molestie.
        Condimentem volument moebi fadiclet quam selectirque sapien et, peneatibus aliquam amet tellus</p>
      <button type="button" className='custom__button'>Explore More</button>
    </div>
    
      <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img" />
      </div>


  </div>
);

export default Header;
