import React from 'react'
import { useState } from 'react'

export default function InputField() {
    const [ask,askfunc] = useState('')

    const handleChange=(e)=>{
        askfunc(e.target.value)
    }

  return (
    <div>
        <input onChange={handleChange} value={ask} type='text' placeholder='Ask '></input>
    </div>
  )
}
