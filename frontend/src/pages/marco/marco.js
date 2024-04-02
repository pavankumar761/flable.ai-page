import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import Chat from '../chat/chat'

export default function Marco(props) {

  return (
    <div>
      <div>
        <Chat convo={props.convo}/>
      </div>
    </div>
  )
}
