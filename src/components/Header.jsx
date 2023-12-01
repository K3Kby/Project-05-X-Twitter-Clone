import  StarTopTweets from '../images/StarTopTweets.png';

function Header (){
  return (
    <header className="header">
      <h1 className="page-title">Home</h1>
      <a href="#"><img className="top-tweets" src={StarTopTweets} alt='Top-tweet' /></a>
    </header>
  );
}

export default Header;