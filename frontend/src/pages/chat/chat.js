import React from 'react'

import './chat.css'

export default function Chat() {
  return (
    <div className='chat'>
    <div className='chat-head'>
      share
      Export
    </div>
      <div className='qbox'><p className='question'>What is your name?</p></div>
      <div className='abox'><p className='answer'>Flable.ai</p></div>
      <div className='qbox'><p className='question'>What is your age?</p></div>
      <div className='abox'><p className='answer'>21</p></div>
      <div className='qbox'><p className='question'>Where are you from?</p></div>
      <div className='abox'><p className='answer'>Kodad</p></div>
      <div className='qbox'><p className='question'>What is your name?</p></div>
    </div>
  )
}
