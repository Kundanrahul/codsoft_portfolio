import React  from 'react';
import{SiGeeksforgeeks} from 'react-icons/si'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai' 

import { images } from '../../constants';
import { AppWrap,MotionWrap } from '../../wrapper'
import './Footer.scss';

const Footer = () => {
  
  return (
    <>
      <h2 className="head-text" style={{color:"lightsalmon"}}>CONTACT ME</h2>
      <h5 className="bold-text" style={{color:"lightcoral"}} >Reach me out.</h5>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:rahulkundan60@gmail.com" className="p-text">rahulkundan60@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 7051194859" className="p-text">+91 7051194859</a>
        </div>
      </div>
      <div className='app__socialmobo'>
         <div>
          <a href="https://github.com/Kundanrahul">
          <AiFillGithub />
          </a>
         </div>
         <div>
           <a href="https://www.linkedin.com/in/rahul-kundan-63b4b3248/">
            <AiFillLinkedin/>
           </a>
        </div>
        <div>
           <a target="_blank" href="https://auth.geeksforgeeks.org/user/rahulkundan/">
            <SiGeeksforgeeks/>
           </a>
        </div>
        
    </div>
      </>
  )};

  export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
  );