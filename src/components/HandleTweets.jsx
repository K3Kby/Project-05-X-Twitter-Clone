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

  const {loading} = useTweetContext();

  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
    
  }
  tweets.sort((a, b) => new Date(b.timeTweet) - new Date(a.timeTweet)); 
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
      <div >
        {tweets.map((element) => (
          <div className="flex justify-start items-start gap-5 py-6 px-4 border-b border-solid border-gray-700" key={element.id} id={element.id}>
            <aside className="w-15 h-15 flex-shrink-0 flex-grow-0 flex-basis-70">
              <Link to={`/${element.userName}`}>
                <img src={element.avatarImage} alt="" />

              </Link>
            </aside>
            <div className="flex flex-col items-start justify-start gap-7.5 w-full">
              <div className="flex flex-col gap-3">
                <h2 className="flex justify-start items-start gap-2.5 text-base">
                  <Link className="text-white no-underline" to={`/${element.userName}`}>
                    <span className="text-base">{element.userName} </span>
                  </Link>
                  <img className="w-5 h-auto" src={Certificat} alt="" />
                  <Link className="text-white no-underline" to={`/${element.userName}`}>
                  <span className="text-gray-500">{element.mail} </span>
                    </Link>
                  <span className="text-gray-500">{formatTweetDate(element.timeTweet) } </span>
                </h2>
                <p className="text-base">{element.textTweet} </p>
                <div className="w-full pt-0.3">
                  <img className="max-w-full h-auto rounded-3xl border-solid border-2F3336 border-1" src={element.imgTweet} alt="" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-16 text-gray-500 text-base pt-2.5">
                <button className="flex items-center justify-center gap-2.5 max-w-max group">
                  <img className="p-2.5 rounded-xl group-hover:bg-blue-700" src={Reply} alt="" title="Reply" />
                  <span className="group-hover:text-blue-700" >{element.NumberComment}</span>
                </button>
                <button className="flex items-center justify-center gap-2.5 max-w-max group">
                  <img className="p-2.5 rounded-xl group-hover:bg-green-300" src={Retweet} alt="" title="Repost" />
                  <span className="group-hover:text-green-300">{element.NumberTweet}</span>
                </button>
                <ActionTweets icone={ReactLike} number={element.NumberLike} description={"Like"} id={element.id} isLikeTweet={element.isLikeTweet} />
                
                <button className="flex items-center justify-center gap-2.5 max-w-max">
                  <img className="p-2.5 rounded-xl hover:bg-blue-500" src={Share} alt="" title="Share" />
                </button>
              </div>

            </div>

          </div>


        ))}
      </div>

    </>
  )
}

export default HandleTweets;