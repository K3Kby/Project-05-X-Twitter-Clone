import { Link } from "react-router-dom";
import ActionTweets from "./ActionTweets";
import Certificat from "../images/Certificat.svg";
import Reply from "../images/ActionIcone/Reply.svg";
import Retweet from "../images/ActionIcone/Retweet.svg";
import ReactLike from "../images/ActionIcone/ReactLike.svg";
import Share from "../images/ActionIcone/Share.svg";
import { formatTweetDate } from "../Utiles/DataTrends";
import { useTweetContext } from "../Utiles/TweetContext";


function HandleTweets({ tweets }) {

  const {loading} = useTweetContext()

  tweets.sort((a, b) => new Date(b.timeTweet) - new Date(a.timeTweet)); 

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }
  
  if (tweets.length == 0) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="text-red-300 text-2xl font-bold">
          Erreur de chargement des données. <br /> Veuillez réessayer
          ultérieurement
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="tweets">
        {tweets.map((element) => (
          <div className="tweet" key={element.id} id={element.id}>
            <aside className="tweet-avatar">
              <Link to={`/${element.userName}`}>
                <img src={element.avatarImage} alt="" />

              </Link>
            </aside>
            <div className="tweet-content">
              <div className="tweet-body">
                <h2 className="tweet-title">
                  <Link className='link-white' to={`/${element.userName}`}>
                    <span className="tweet-title-author">{element.userName} </span>
                  </Link>
                  <img className="tweet-title-author" src={Certificat} alt="" />
                  <Link className='link-white' to={`/${element.userName}`}>
                  <span className="tweet-title-details">{element.mail} </span>
                    </Link>
                  <span className="tweet-title-details">{formatTweetDate(element.timeTweet) } </span>
                </h2>
                <p className="tweet-text">{element.textTweet} </p>
                <div className="tweet-image">
                  <img src={element.imgTweet} alt="" />
                </div>
              </div>
              <div className="tweet-actions">
                <div className="tweet-action">
                  <img src={Reply} alt="" title="Reply" />
                  <span>{element.NumberComment}</span>
                </div>
                <div className="tweet-action">
                  <img src={Retweet} alt="" title="Repost" />
                  <span>{element.NumberTweet}</span>
                </div>
                <ActionTweets icone={ReactLike} number={element.NumberLike} description={"Like"} id={element.id} isLikeTweet={element.isLikeTweet} />
                
                <div className="tweet-action">
                  <img src={Share} alt="" title="Share" />
                </div>
              </div>

            </div>

          </div>


        ))}
      </div>

    </>
  )
}

export default HandleTweets;