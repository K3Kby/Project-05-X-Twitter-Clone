import Profile from '../images/profile-photo.png';
import Icone1 from '../images/Icones/Icone1.svg';
import Icone2 from '../images/Icones/Icone2.svg';
import Icone3 from '../images/Icones/Icone3.svg';
import Icone4 from '../images/Icones/Icone4.svg';
import Icone5 from '../images/Icones/Icone5.svg';
import { Link } from 'react-router-dom';

function TweetEditor (){
  return (
    <div className="tweet-editor"> 
    <Link to={"/UserProfile"}>
        <aside className="avatar"> 
           <img src={Profile} alt='Profile-photo' />
        </aside>
    </Link>
        <div className='tweet-editor-form'>
            <input type="text" className='tweet-editor-input' placeholder="What's happening?"  size=" " ></input>
         <div className='tweet-editor-buttons'>
            <section className='tweet-editor-actions'>
                <a href=" "><img src={Icone1} alt='Image' /></a>
                <a href=" "><img src={Icone2} alt='Gif' /></a>
                <a href=" "><img src={Icone3} alt='Stat' /></a>
                <a href=" "><img src={Icone4} alt='Smiley' /></a>
                <a href=" "><img src={Icone5} alt='Calendrier' /></a>
            </section>
            <button className='button' type="button">Tweet</button>
        </div>
        </div>
        
    </div>
  );
}

export default TweetEditor;