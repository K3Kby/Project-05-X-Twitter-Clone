import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";

function ActionTweets({icone, number, description}) {
    const [counterTweet, setCounterTweet]=useState(number);
    const [isCounter, setIsCounter]=useState(false);

    const handleClick = () =>{ 
        if(isCounter){
            setCounterTweet(counterTweet - 1);
            setIsCounter(false)
         }else{
            setCounterTweet(counterTweet + 1);
            setIsCounter(true)
         }
    }
  return (
    <div onClick={(event) => {handleClick()}} className="tweet-action">
        {
            description === "Like" && isCounter ? <div> <FcLike /></div> : <img src={icone} alt="" title={description} />
        }
        <span>{counterTweet} </span>
    </div>
  )
}

export default ActionTweets