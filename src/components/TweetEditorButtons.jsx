import Icone1 from '../images/Icones/Icone1.svg';
import Icone2 from '../images/Icones/Icone2.svg';
import Icone3 from '../images/Icones/Icone3.svg';
import Icone4 from '../images/Icones/Icone4.svg';
import Icone5 from '../images/Icones/Icone5.svg';

function TweetEditorButtons (){
  return (
         <div className='tweet-editor-buttons'>
            <section className='tweet-editor-actions'>
                <a href=" "><img src={Icone1} alt='Image' /></a>
                <a href=" "><img src={Icone2} alt='Gif' /></a>
                <a href=" "><img src={Icone3} alt='Stat' /></a>
                <a href=" "><img src={Icone4} alt='Smiley' /></a>
                <a href=" "><img src={Icone5} alt='Calendrier' /></a>
            </section>
            <button className='button' type="button">Tweet</button>
          </div>

  );
}

export default TweetEditorButtons; 