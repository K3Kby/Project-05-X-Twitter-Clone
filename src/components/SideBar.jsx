import  TwitterNavigation from '../images/IconeNavigation/TwitterNavigation.svg';
import HomeFill from '../images/IconeNavigation/HomeFill.svg';
import Notifications from'../images/IconeNavigation/Notifications.svg';
import Explore from '../images/IconeNavigation/Explore.svg';
import Messages from '../images/IconeNavigation/Messages.svg';
import Bookmarks from '../images/IconeNavigation/Bookmarks.svg';
import Lists from '../images/IconeNavigation/Lists.svg';
import Profile from '../images/IconeNavigation/Profile.svg';
import More from '../images/IconeNavigation/More.svg';

import Avat from '../images/profile-photo.png';
import IndentifianSide from './IndentifianSide';
import { Link } from 'react-router-dom';


function SideBar (){
    
  return (
    <div className='sidebar'>
        <div className='divsidebar'>
        <div className='nav-Links'>
            <ul >
                <li><img src={TwitterNavigation} alt='Top-tweet' /></li>
                <Link className='link-white'  to={"/"}>
                <li><img src={HomeFill} alt='Home' />Home</li>

                </Link>
                <li><img src={Explore} alt='Explore' />Explore</li>
                <li><img src={Notifications} alt='Notifications' />Notifications</li>
                <li><img src={Messages} alt='Messages' />Messages</li>
                <li><img src={Bookmarks} alt='Bookmarks' />Bookmarks</li>
                <li><img src={Lists} alt='Lists' />Lists</li>
                <Link className='link-white'  to={"/UserProfile"}>
                <li><img src={Profile} alt='Profile' />Profile</li>
                </Link>
                <li><img src={More} alt='More' />More</li>
                <div>
        <button type="button" className='bg-blue-500 py-[.7rem] px-[5.5rem] rounded-full'>Tweet</button>
        </div>
            </ul>
            
        </div>
        
        
<IndentifianSide/>
        
        </div>
    </div>
    
  );
}

export default SideBar;