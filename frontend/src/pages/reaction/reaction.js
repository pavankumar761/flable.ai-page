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
    const [unLikeState, unLikeStateFunc] = useState(false)

    const likeClick = ()=>{
        likeStateFunc(!likeState)
    }

    const unLikeClick = () => {
        unLikeStateFunc(!unLikeState)
    }

  return (
    <div className='reaction'>
          <img onClick={likeClick} src={likeState ? like : nolike} />
          <img onClick={unLikeClick} src={unLikeState ? dislike : nodislike} />
          <img src={copy} onClick={props.copyText}/>
    </div>
  )
}
