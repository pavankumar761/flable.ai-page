import React from 'react'

import './ask.css'

export default function Ask(props) {

  return (
    <div className='ask'>
      <form onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange} value={props.ask} type='text' placeholder={`Ask ${props.askwho}`} />
      <button type='submit' >Ask</button>
    </form>
    </div>
  )
}
