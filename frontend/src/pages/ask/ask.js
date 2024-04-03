import React from 'react'

import './ask.css'

export default function Ask(props) {

  return (
      <form onSubmit={props.handleSubmit}>
      <input onChange={props.handleChange} value={props.ask} type='text' placeholder={`Ask ${props.askwho}`} required />
      <button type='submit' >Ask</button>
    </form>
  )
}
