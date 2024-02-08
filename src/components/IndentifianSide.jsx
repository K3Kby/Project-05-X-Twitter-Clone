import React from 'react'
import Profile from '../images/profile-photo.png';
import Secure from '../images/IconeNavigation/IconeSecure.svg';
import { Link } from 'react-router-dom';
import { useTweetContext } from '../Utiles/TweetContext';

function IndentifianSide() {
  
  const {userProfils} = useTweetContext();

  const currentUser = userProfils.find((user) => user.isLogge === true)

  return (
    <div className='profileSide'>
      <Link to={`/${currentUser?.userName}`}><img src={currentUser?.avatar} alt="" /></Link>
        
        <div>
            <div className='profileNameSide'>
            <Link className='link-white' to={`/${currentUser?.userName}`}><h4>{currentUser?.userName} </h4></Link>
                <img src={Secure} alt="" />
            </div>
            <Link className='link-white' to={`/${currentUser?.userName}`}><span>{currentUser?.lienProfil} </span></Link>
        </div>
    </div>
  )
}

export default IndentifianSide