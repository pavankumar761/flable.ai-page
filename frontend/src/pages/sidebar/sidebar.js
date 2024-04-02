import React from 'react'

import '../sidebar/sidebar.css'

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
      <p onClick={props.handleMarco} style={{ color: (props.bot === 1) ?'#057ceb' : 'black'}}>MARCO</p>
      <p onClick={props.handleSW} style={{ color: (props.bot === 2) ? '#057ceb' : 'black'}}>Social Watch</p>
      <p onClick={props.handleWA} style={{ color: (props.bot === 3) ? '#057ceb' : 'black' }}>Web Analytics</p>
    </div>
  )
}
