import React from 'react'
import { useState } from 'react'

import like from '../../utilities/images/like.png'
import nolike from '../../utilities/images/nolike.png'
import dislike from '../../utilities/images/dislike.png'
import nodislike from '../../utilities/images/nodislike.png'
import copy from '../../utilities/images/copy.png'
import './reaction.css'

export default function Reaction(props) {

    const [likeState, likeStateFunc] = useState(false)
    const [disLikeState, disLikeStateFunc] = useState(false)

    const likeClick = async()=>{
        likeStateFunc(!likeState); 
      if (!likeState && disLikeState) { disLikeStateFunc(false); props.likeapi1(); props.dislikeapi2(); }
      else if (!likeState) { props.likeapi1(); }
    }

    const disLikeClick = () => {
      disLikeStateFunc(!disLikeState);
      if (!disLikeState && likeState) { likeStateFunc(false); props.dislikeapi1(); props.likeapi2() }
      else if(!disLikeState){ props.dislikeapi1(); }
    }

  return (
    <div className='reaction'>
          <img onClick={likeClick} src={likeState ? like : nolike} />
          <img onClick={disLikeClick} src={disLikeState ? dislike : nodislike} />
          <img src={copy} onClick={props.copyText}/>
    </div>
  )
}
