import React from 'react';
import Header from '../components/Header.jsx';
import TweetEditor from '../components/Tweet-editor.jsx';
import HandleTweets from '../components/HandleTweets.jsx';
import { useTweetContext } from '../Utiles/TweetContext.jsx';




function Home() {

  const {tweets} = useTweetContext();
  return (
    <>
      
      <main className="timeline">
        <Header />
        <TweetEditor/>
        <HandleTweets tweets={tweets}/>
      </main>
      
    </>
  );
}

export default Home;