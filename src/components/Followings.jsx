import React from 'react'

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
                            <p>{follow.name} </p>
                            <img src={follow.iconeCertification} alt="" />
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