import React, { useState } from 'react'

import'./Navbar.scss';
import { images } from '../../constants';
import {motion} from 'framer-motion';
import{ HiMenuAlt4 } from 'react-icons/hi';

const Navbar = () => {
  const [toggle, setToggled] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo '>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'contact', 'work', 'skills'].map((items)=>(
          <li className='app__flex p-text 'key={`link-${items}`}>
            <div/>
            <a href={`#${items}`}>{items}</a>
          </li>
        ))}
        </ul>
        <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={()=>setToggled(true)}/>
        </div>
    </nav>
  )
}

export default Navbar