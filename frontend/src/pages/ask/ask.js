import React from 'react'
import { useState } from 'react'

import './ask.css'

export default function Ask(props) {
    const [ask,askfunc] = useState('')

    const handleChange=(e)=>{
        askfunc(e.target.value)
    }

    const handleSubmit= (e)=>{
      e.preventDefault();
    }

  return (
    <div className='ask'>
      <input onChange={handleChange} value={ask} type='text' placeholder={`Ask ${props.askwho}`} />
      <button type='Submit'>Ask</button>
    </div>
  )
}
