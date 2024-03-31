import React from 'react'
import {useState} from 'react'
import './header.css'

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
        <img src='https://flable.ai/wp-content/uploads/2023/07/Group-146-1.png' /> 
        <button onClick={getSidebar}>...</button>
      </div>
      <div className='right'>
      <div className='profile'>
        <p >www.pavankumar.com </p>
        <p className='admin'>Admin</p>
        </div>
        <div className="profile-pic">
          <img src="https://picsum.photos/50" alt="Profile Picture" />
        </div>
      </div>
    </div>
    { showSidebar && <Sidebar></Sidebar> }
    </div>
  )
}

