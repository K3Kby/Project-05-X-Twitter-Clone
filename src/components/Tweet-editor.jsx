import Profile from '../images/profile-photo.png';

import { Link } from 'react-router-dom';
import TweetEditorForm from '../components/TweetEditorForm.jsx';

function TweetEditor (){
  return (
    <div className="tweet-editor"> 
    <Link to={"/UserProfile"}>
        <aside className="avatar"> 
           <img src={Profile} alt='Profile-photo' />
        </aside>
    </Link>
      
        <TweetEditorForm/>
        
    </div>
  );
}

export default TweetEditor;