import React from 'react';
import Header from '../components/Header.jsx';
import TweetEditor from '../components/Tweet-editor.jsx';
import HandleTweets from '../components/HandleTweets.jsx';
import { dataTweets } from '..//Utiles/DataTweets.js';



function Home() {
  return (
    <>
      
      <main className="timeline">
        <Header />
        <TweetEditor/>
        <HandleTweets tweets={dataTweets }/>
      </main>
      
    </>
  );
}

export default Home;