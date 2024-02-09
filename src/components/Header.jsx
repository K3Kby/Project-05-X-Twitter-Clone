import StarTopTweets from '../images/StarTopTweets.png';

function Header() {
  return (
    <header className="flex items-center justify-between py-[1.5rem] px-[1rem] border-b border-solid border-gray-700">
      <h1 className="text-[1.5rem] font-bold">Home</h1>
      <button><img className="w-[1.5rem] h-auto" src={StarTopTweets} alt='Top-tweet' /></button>
    </header>
  );
}

export default Header;