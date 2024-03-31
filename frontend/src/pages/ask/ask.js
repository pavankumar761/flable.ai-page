import React from 'react'
import { useState } from 'react'

export default function Ask() {
    const [ask,askfunc] = useState('')

    const handleChange=(e)=>{
        askfunc(e.target.value)
    }

    const handleSubmit= (e)=>{
      e.preventDefault();

    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={ask} type='text' placeholder='Ask MARCO'></input>
        <button type='Submit'>Ask</button>
      </form>
    </div>
  )
}
