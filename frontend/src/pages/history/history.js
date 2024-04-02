import React from 'react'

import './history.css'

export default function History(props) {


  return (
    <div className='history'>
        <div className='history-header'>
        <div className='history-title'>History</div>
            <button onClick={props.eraseConvo}>New Chat</button>
        </div>
        <div className='history-body'>
            {
              props.history.map((qaobj)=>(
                <div>
                  <div>{qaobj.question}</div>
                  <div>{qaobj.answer}</div>
                </div>
              ))
            }
        </div>
    </div>
  )
}
