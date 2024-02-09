import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TweetContext = createContext()

export const useTweetContext = () => {
    return useContext(TweetContext)
}

export const TweetProvider = ({ children }) => {
    const [tweets, setTweets] = useState([]); 
    const [userProfils, setPserProfils] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      axios
        .get("http://localhost:8000/current-user")
        .then((response) => {
          setPserProfils(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des tweets : ", error);
          setLoading(false);
        });
    }, []);
    useEffect(() => {
      axios
        .get("http://localhost:8000/tweets")
        .then((response) => {
          setTweets(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des tweets : ", error);
          setLoading(false);
        });
    }, []);

    const addTweet = (newTweet) => {
      axios
      .post("http://localhost:8000/tweets", newTweet)
      .then((response) => setTweets([response.data, ...tweets]));
      };
    
      const toggleLike = (tweetId) => {
        const updatedTweets = tweets.map((tweeters) => {
          if (tweeters.id === tweetId) {
            const newLikeCount = tweeters.isLikeTweet
              ? tweeters.NumberLike - 1
              : tweeters.NumberLike + 1;
            return {
              ...tweeters,
              NumberLike: newLikeCount,
              isLikeTweet: !tweeters.isLikeTweet,
            };
          }
          return tweeters;
        });
        setTweets(updatedTweets);
      }; 
    
      return (
      <TweetContext.Provider value={{ userProfils, tweets, addTweet, toggleLike, loading}}>
        {children}
      </TweetContext.Provider>
    );
  };