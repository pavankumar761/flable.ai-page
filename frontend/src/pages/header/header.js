import React from 'react'
import {useState} from 'react'

import './header.css';
import fableicon from '../../utilities/images/flable-icon.png'
import Threelines from '../../utilities/images/Threelines.png'

import Sidebar from '../sidebar/sidebar';

export default function Header() {

    const [showSidebar, showSidebarFunc] = useState(false);

    const getSidebar = ()=>{
        showSidebarFunc(!showSidebar);
    }

  return (
    <div>
    <div className='header'>
      <div className='left'>
        <img src={fableicon} /> 
          <div className='Threelines'><img src={Threelines} onClick={getSidebar} /></div>
      </div>
      <div className='right'>
      <div className='profile'>
            <div className='email'><p >www.pavankumar.com </p></div>
            <div className='admin'><p >Admin</p></div>
        </div>
        <div className="profile-pic">
          <img src="https://picsum.photos/50" alt="Profile Picture" />
        </div>
      </div>
    </div>
      <div className='sidebar' style={{ left: showSidebar ? '0' : '-300px' }}>{<Sidebar></Sidebar>}</div>
    </div>
  )
}

