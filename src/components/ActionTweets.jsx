 import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { useTweetContext } from '../Utiles/TweetContext';

function ActionTweets({icone, number, description, id, isLikeTweet}) {

  const {toggleLike} = useTweetContext()

    const handleClick = () =>{ 
        toggleLike(id)
    }

   
  return (
    <button onClick={(event) => {handleClick()}}  className="flex items-center justify-center gap-2.5 max-w-max group">
        {
            description === "Like" && isLikeTweet ? <div className='px-2'> <FcLike style= {{width: "20px" }} /></div> : <img className='group-hover:bg-pink-600 p-2.5 rounded-xl' src={icone} alt="" title={description} />
        }
        {description === "Like" && isLikeTweet ? (
          <span className='text-orange-600'>{number} </span>
        ) : (
          <span className='group-hover:text-pink-600'>{number} </span>
        )}
    </button>
  )
}

export default ActionTweets