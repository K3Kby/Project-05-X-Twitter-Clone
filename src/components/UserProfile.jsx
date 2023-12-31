import React from 'react'
import { GrLinkPrevious } from "react-icons/gr";
import { RxLink2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { RiUserFollowFill } from "react-icons/ri";
import '../style/userName.css'
import { Link } from 'react-router-dom';
import Certificat from "../images/Certificat.svg";
import BannerX from "../images/pngimg.com - twitter_PNG11.png";
import Profile from '../images/profile-photo.png';

function UserProfile() {
  return (
    <div className="timeline">
      <div className="username-entete">
        <Link to={"/"} className="link-white">
          <GrLinkPrevious />
        </Link>
        <div>
          <h2>
            {"Bradley Ortiz"} <img src={Certificat} alt="" />
          </h2>
          <span className="username-span">{420.5 + " k"} posts</span>
        </div>
      </div>
      <div className="user-content">
        <img className="banner" src={BannerX} alt="" />
        <div className="user-avatar">
          <img className="user-avatar" src={Profile} alt="" />
          <div className="user-profil">
            <p>{"..."} </p>
            <button className="follow">Follow</button>
          </div>
        </div>
      </div>
      <div className="user-text">
        <h2>
        {"Bradley Ortiz"} <img src={Certificat} alt="" />
        </h2>
        <span className="username-span">{'@bradley'} </span>
      </div>
      <p className="user-description">{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos quo aspernatur enim reprehenderit, fugit velit magnam amet cum, molestias doloribus, quaerat adipisci ipsa fuga sunt voluptatem dolorem dolores. Enim."} </p>
      <div className="user-link-content">
        <div>
          <RxLink2 />
          <span className="username-link">{"bradley.com"} </span>
        </div>
        <div>
          <SlCalender />
          <span className="username-span">{"A rejoint Twitter en février 2007"} </span>
        </div>
      </div>
      <div className="user-abonne">
        <p>
          {1086} <span className="username-span">abonnemets</span>
        </p>
        <p>
          {62 + " M"} <span className="username-span">abonnés</span>
        </p>
      </div>
      <div className="user-suivi">
        <RiUserFollowFill />
        <span className="username-span">{"Suivi par Benito et PlayStation"} </span>
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

export default UserProfile