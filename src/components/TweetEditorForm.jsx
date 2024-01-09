import TweetEditorButtons from '../components/TweetEditorButtons.jsx';

function TweetEditorForm (){
  return (
        <div className='tweet-editor-form'>
            <input type="text" className='tweet-editor-input' placeholder="What's happening?"  size=" " ></input>
         <TweetEditorButtons/>
        </div>

  );
}

export default TweetEditorForm; 