import React from 'react';
import {images} from '../../constants'
import './Chef.css';

import { SubHeading } from '../../components';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant"> What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
        <p className='p__opensans '></p>
      </div>

      <div className='app__chef-sign'>
        <p>Iheb Jaab</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign"/>
      </div>   
      
    </div>
  </div>
);

export default Chef;
