
import { Link } from 'react-router-dom';
import Icone2 from '../images/Icones/Icone2.svg';
import Icone3 from '../images/Icones/Icone3.svg';
import Icone4 from '../images/Icones/Icone4.svg';
import Icone5 from '../images/Icones/Icone5.svg';

function TweetEditorButtons (){
  return (
         <div className='flex gap-[400px]'>
            <section className='flex items-center justify-start gap-4'>
                <Link ><img src={Icone2} alt='Gif' /></Link>
                <Link ><img src={Icone3} alt='Stat' /></Link>
                <Link ><img src={Icone4} alt='Smiley' /></Link>
                <Link ><img src={Icone5} alt='Calendrier' /></Link>
            </section>
            <button className='bg-blue-500 py-[.7rem] px-[1.5rem] rounded-full' type="submit">Tweet</button>
          </div>

  );
}

export default TweetEditorButtons; 