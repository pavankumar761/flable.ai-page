import React,{ useState } from 'react'
import { jsPDF } from 'jspdf'
import axios from 'axios'

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

  const likeapi1 = async(e)=>{
    try {
      const res = await axios.post('https://flable-ai-page-1.onrender.com/api/marco/like', { answer: e, value : 1 });
      console.log('reaction sucessfully updated l1')
    } catch (error) {
      console.log('error in updating reaction',error)
    }
  }

  const likeapi2 = async (e) => {
    try {
      const res = await axios.post('https://flable-ai-page-1.onrender.com/api/marco/like', { answer: e, value: -1 });
      console.log('reaction sucessfully updated l2')
    } catch (error) {
      console.log('error in updating reaction', error)
    }
  }

  const dislikeapi1 = async (e) => {
    try {
      const res = await axios.post('https://flable-ai-page-1.onrender.com/api/marco/dislike', { answer: e, value: 1 });
      console.log('reaction sucessfully updated d1')
    } catch (error) {
      console.log('error in updating reaction', error)
    }
  }

  const dislikeapi2 = async (e) => {
    try {
      const res = await axios.post('https://flable-ai-page-1.onrender.com/api/marco/dislike', { answer: e, value: -1 });
      console.log('reaction sucessfully updated d2')
    } catch (error) {
      console.log('error in updating reaction', error)
    }
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
                <div className='date'> {qaobj.date} {qaobj.time}</div>
                <div className='abox'><p className='answer'>{qaobj.answer}</p></div>
              <div><Reaction 
                      copyText={copyText(qaobj.answer)}   
                      likeapi1={() => likeapi1(qaobj.answer)}
                      likeapi2={() => likeapi2(qaobj.answer)} 
                      dislikeapi1={() => dislikeapi1(qaobj.answer)}
                      dislikeapi2={() => dislikeapi2(qaobj.answer)}
                  /></div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

