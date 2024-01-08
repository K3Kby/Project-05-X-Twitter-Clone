import { Link } from "react-router-dom";
import ActionTweets from "./ActionTweets";


function HandleTweets({ tweets }) {
  return (
    <>
      <div className="tweets">
        {tweets.map((element, id) => (
          <div className="tweet" key={id} id={element.id}>
            <aside className="tweet-avatar">
              <Link to={`/Username/${element.userId}`}>
                <img src={element.photoProfile} alt="" />

              </Link>
            </aside>
            <div className="tweet-content">
              <div className="tweet-body">
                <h2 className="tweet-title">
                  <Link className='link-white' to={`/Username/${element.userId}`}>
                    <span className="tweet-title-author">{element.name} </span>
                  </Link>
                  <img className="tweet-title-author" src={element.iconeCertification} alt="" />
                  <span className="tweet-title-details">{element.mail} </span>
                  <span className="tweet-title-details">{element.timeTweet} </span>
                </h2>
                <p className="tweet-text">{element.textTweet} </p>
                <div className="tweet-image">
                  <img src={element.imgTweet} alt="" />
                </div>
              </div>
              <div className="tweet-actions">
                <ActionTweets icone={element.iconeComment} number={element.NumberComment} description={"Reply"} />
                <ActionTweets icone={element.iconeTweet} number={element.NumberTweet} description={"Repost"} />
                <ActionTweets icone={element.iconeLike} number={element.NumberLike} description={"Like"} />

                <div className="tweet-action">
                  <img src={element.iconeShare} alt="" title="Share" />
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