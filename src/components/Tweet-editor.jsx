import Profile from '../images/profile-photo.png';

import { Link } from 'react-router-dom';
import TweetEditorForm from '../components/TweetEditorForm.jsx';
import { useTweetContext } from '../Utiles/TweetContext.jsx';

function TweetEditor (){
  const {userProfils} = useTweetContext();

  const currentUser = userProfils.find((user) => user.isLogge === true)
  return (
    <div className="tweet-editor"> 
    <Link to={"/UserProfile"}>
        <aside className="avatar"> 
           <img src={currentUser?.avatar}  />
        </aside>
    </Link>
      
        <TweetEditorForm/>
        
    </div>
  );
}

export default TweetEditor;