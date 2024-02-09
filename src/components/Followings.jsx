import React from 'react'
import Certificat from "../images/Certificat.svg";

function Followings({Follows}) {
  return (
    <div className='followings'>
        <h2>Who to follow</h2>
        {Follows.slice(0,3).map((follow) => (
            <div className='followdiv' key={follow.id}>
                <div className='identitifiantFollow'>
                    <img className='profileFollow' src={follow.avatarImage} alt="" />
                    <div>
                        <div className='infoFollow'>
                            <p>{follow.userName} </p>
                            <img src={Certificat} alt="" />
                        </div>
                        <span>{follow.mail} </span>
                    </div>
                </div>
                <button>Follow</button>
            </div>
        )) }
        <h2 className='showmore'>Show more</h2>
    </div>
  )
}

export default Followings