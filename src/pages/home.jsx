import React from 'react';
import Header from '../components/Header.jsx';
import TweetEditor from '../components/Tweet-editor.jsx';
import HandleTweets from '../components/HandleTweets.jsx';
import { useTweetContext } from '../Utiles/TweetContext.jsx';




function Home() {

  const {tweets} = useTweetContext();
  return (
    <>
      
      <main className="w-[800px] border-x-[1px] border-solid border-gray-700">
        <Header />
        <TweetEditor/>
        <HandleTweets tweets={tweets}/>
      </main>
      
    </>
  );
}

export default Home;