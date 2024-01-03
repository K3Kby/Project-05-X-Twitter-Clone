import React from 'react'
import Profile from '../images/profile-photo.png';
import Secure from '../images/IconeNavigation/IconeSecure.svg';
import { Link } from 'react-router-dom';

function IndentifianSide() {
  return (
    <div className='profileSide'>
      <Link to={"/UserProfile"}><img src={Profile} alt="" /></Link>
        
        <div>
            <div className='profileNameSide'>
            <Link className='link-white' to={"/UserProfile"}><h4>Bradley Ortiz</h4></Link>
                <img src={Secure} alt="" />
            </div>
            <span>@bradley</span>
        </div>
    </div>
  )
}

export default IndentifianSide