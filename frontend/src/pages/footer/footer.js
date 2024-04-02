import React from 'react'

import Dropdown from '../dropdown/dropdown'
import Ask from '../ask/ask'
import './footer.css'

export default function Footer(props) {

  return (
    <div className='footer' style={{ width: props.showSidebar ? '70%' : '86%' }}>
          <div className='dropdown'><Dropdown/></div>
      <div className='ask'>
      <Ask askwho={props.askwho} handleSubmit={props.handleSubmit} handleChange={props.handleChange} ask={props.ask}/>
      </div>
    </div>
  )
}
