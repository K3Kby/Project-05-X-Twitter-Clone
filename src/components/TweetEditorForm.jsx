import { useForm } from 'react-hook-form';
import TweetEditorButtons from '../components/TweetEditorButtons.jsx';
import Icone1 from '../images/Icones/Icone1.svg';
import { useTweetContext } from '../Utiles/TweetContext.jsx';
import { useState } from 'react';

function TweetEditorForm (){

  const {userProfils} = useTweetContext()
  const {addTweet} = useTweetContext()
  const currentUser = userProfils.find((user) => user.isLogge === true)

  const { register, handleSubmit, formState:{errors}, reset } = useForm()

  const [commentaire, setCommentaire] = useState(0)
  const [retweet, setRetweet] = useState(0)
  const [like, setLike] = useState(0)

  const handleCreateTweet = (data) => {
    const id = Math.floor(Math.random() * (1000 - 4))

    const selectedFile = data.selectedImage[0]

    if (selectedFile) {
      const reader = new FileReader()
    
    reader.onload = function(event) {
      const image = event.target.result

      const createTweet = {
        userId : currentUser.userId,
        id : id,
        avatarImage : currentUser.avatar,
        userName : currentUser.userName,
        mail : currentUser.lienProfil,
        timeTweet : new Date().toISOString(),
        textTweet : data.description,
        imgTweet : image,
        NumberComment : commentaire,
        NumberTweet : retweet,
        NumberLike : like,
        isLikeTweet : false
      };
      addTweet(createTweet)
      reset()
    }

    reader.readAsDataURL(selectedFile)
    } else {
      const createTweet = {
        userId : currentUser.userId,
        id : id,
        avatarImage : currentUser.avatar,
        userName : currentUser.userName,
        mail : currentUser.lienProfil,
        timeTweet : new Date().toISOString(),
        textTweet : data.description,
        imgTweet : null,
        NumberComment : commentaire,
        NumberTweet : retweet,
        NumberLike : like,
        isLikeTweet : false
      };
      addTweet(createTweet)
      reset() 
    }
    

  }


  return (
        <div className='tweet-editor-form'>
          <form onSubmit={handleSubmit((data) => handleCreateTweet(data))}>
            <input
            {...register("description", {required:true, maxLength:180})}
            type="text" className='tweet-editor-input' placeholder="What's happening?"   />
            {errors.description && <p>Ce champ est obligatoire et ne doit pas dépasser 180 caractères.</p> }
            <div className='flex items-center justify-start gap-4'>
            <label htmlFor={`file-input`} className="relative cursor-pointer">
              <input
                type="file"
                id={`file-input`}
                className="absolute w-0 h-0 overflow-hidden"
                {...register("selectedImage")}
              />
              <img src={Icone1} alt="" className="w-4.5 h-4.5" />
            </label>
         <TweetEditorButtons/>
            </div>
            

          </form>
        </div>

  );
}

export default TweetEditorForm; 