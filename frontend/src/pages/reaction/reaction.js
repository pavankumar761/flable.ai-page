import React from 'react'
import { useState } from 'react'

export default function Reaction() {

    const [likeState, likeStateFunc] = useState(false)
    const [unLikeState, unLikeStateFunc] = useState(false)

    const likeClick = ()=>{
        likeStateFunc(!likeState)
    }

    const unLikeClick = () => {
        unLikeStateFunc(!unLikeState)
    }

  return (
    <div>
          <img onClick={likeClick} src={likeState ? like : nolike} />
          <img onClick={unLikeClick} src={unLikeState ? unlike : nounlike} />
    </div>
  )
}
