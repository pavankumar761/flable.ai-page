import React from 'react'

import './history.css'

export default function History() {
  return (
    <div className='history'>
        <div className='history-header'>
        <div className='history-title'>History</div>
            <button>New Chat</button>
        </div>
        <div className='history-body'>
        <div>
            <p>Question 1</p>
            <p>Anawer 1</p>
        </div>
        </div>
    </div>
  )
}
