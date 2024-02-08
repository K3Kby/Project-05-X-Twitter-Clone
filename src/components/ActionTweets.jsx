 import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { useTweetContext } from '../Utiles/TweetContext';

function ActionTweets({icone, number, description, id, isLikeTweet}) {

  const {toggleLike} = useTweetContext()

    const handleClick = () =>{ 
        toggleLike(id)
    }

   
  return (
    <div onClick={(event) => {handleClick()}} className="tweet-action">
        {
            description === "Like" && isLikeTweet ? <div> <FcLike style= {{width: "20px" }} /></div> : <img src={icone} alt="" title={description} />
        }
        <span>{number} </span>
    </div>
  )
}

export default ActionTweets