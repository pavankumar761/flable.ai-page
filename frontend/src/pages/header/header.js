import React from 'react'
import {useState} from 'react'

import './header.css';
import flableicon from '../../utilities/images/flable-icon.png'
import Threelines from '../../utilities/images/Threelines.png'
import profilepic from '../../utilities/images/profile-pic.jpeg'

export default function Header(props) {

  return (
    <div className='header'>
      <div className='left'>
        <img src={flableicon} /> 
          <div className='Threelines'><img src={Threelines} onClick={props.getSidebar} /></div>
      </div>
      <div className='right'>
      <div className='profile'>
            <div className='email'><p >www.pavankumar.com </p></div>
            <div className='admin'><p >Admin</p></div>
        </div>
        <div className="profile-pic">
          <img src={profilepic} alt="Profile Picture" />
        </div>
      </div>
    </div>
  )
}

