import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.scss';
import { HiMenu, HiXCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className={`app__navbar ${toggle ? 'bold-navbar' : ''}`}>
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'skills', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
            initial={{ x: 300 }} 
            whileInView={{ x: [300, 0, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiXCircle onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

