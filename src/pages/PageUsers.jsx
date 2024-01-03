import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { userProfil } from '../components/Users';
import { GrLinkPrevious } from "react-icons/gr";
import { RxLink2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { RiUserFollowFill } from "react-icons/ri";
import '../style/userName.css'

function PageUsers() {
    const {id} = useParams ();

    const userfind = userProfil.find((user) => {
        return user.userId == id;
    })
  return (
    <div className="timeline">
      <div className="username-entete">
        <Link to={"/"} className="link-white">
          <GrLinkPrevious />
        </Link>
        <div>
          <h2>
            {userfind.userName} <img src={userfind.iconCertification} alt="" />
          </h2>
          <span className="username-span">{userfind.posts} posts</span>
        </div>
      </div>
      <div className="user-content">
        <img className="banner" src={userfind.banner} alt="" />
        <div className="user-avatar">
          <img className="user-avatar" src={userfind.avatar} alt="" />
          <div className="user-profil">
            <p>{userfind.points} </p>
            <button className="follow">Follow</button>
          </div>
        </div>
      </div>
      <div className="user-text">
        <h2>
          {userfind.userName} <img src={userfind.iconCertification} alt="" />
        </h2>
        <span className="username-span">{userfind.lienProfil} </span>
      </div>
      <p className="user-description">{userfind.description} </p>
      <div className="user-link-content">
        <div>
          <RxLink2 />
          <span className="username-link">{userfind.linkWeb} </span>
        </div>
        <div>
          <SlCalender />
          <span className="username-span">{userfind.dateCreated} </span>
        </div>
      </div>
      <div className="user-abonne">
        <p>
          {userfind.abonnemets} <span className="username-span">abonnemets</span>
        </p>
        <p>
          {userfind.abonne} <span className="username-span">abonnés</span>
        </p>
      </div>
      <div className="user-suivi">
        <RiUserFollowFill />
        <span className="username-span">{userfind.suiviPar} </span>
      </div>
      <ul className="user-ul">
        <li>Posts</li>
        <li>Affiliés</li>
        <li>Réponses</li>
        <li>Médias</li>
        <li>J'aime</li>
      </ul>
    </div>

  )
}

export default PageUsers