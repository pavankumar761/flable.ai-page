import React from 'react'
import { jsPDF } from 'jspdf'

import Reaction from '../reaction/reaction'
import './chat.css'

export default function Chat(props) {

  const downloadpdf = ()=>{
     const pdf=new jsPDF()
     let i=10;
     props.convo.forEach((qaobj, num) => {
       pdf.text(`Question ${num + 1}: ${qaobj.question}`, 10, i);
       i += 10;
       pdf.text(`Answer ${num + 1}: ${qaobj.answer}`, 10, i);
       i += 15; 
     })
      pdf.save('marco')
  }

  const copyText =(copyans)=>{
    navigator.clipboard.writeText(copyans)
      .then(() => {
        console.log('Messages copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying messages:', error);
      });
  }

  return (
    <div className='chat'>
      <div className='chat-head'>
        <p>share</p>
        <p className='export' onClick={downloadpdf}>Export</p>
      </div>
      <div>
        {
          props.convo.map((qaobj) => (
            <div>
                <div className='qbox'><p className='question'>{qaobj.question}</p></div>
                <div className='abox'><p className='answer'>{qaobj.answer}</p></div>
                <div><Reaction copyText={copyText(qaobj.answer)}/></div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

