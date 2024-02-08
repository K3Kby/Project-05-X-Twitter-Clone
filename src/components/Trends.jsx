import SearchTwitter from "..//images/IconesTrends/SearchTwitter.svg";
import HandleTrends from "./HandleTrends";
import { dataTrends } from "..//Utiles/DataTrends";
import Followings from ".//Followings";
import Footer from "./Footer";
import { useTweetContext } from "../Utiles/TweetContext";
function Trends (){

  const {tweets} = useTweetContext()
    return (
        <div className="trends">
          <div className="input-search">
            <img className="search" src={SearchTwitter} alt="" />
            <input className="searchTwit" type="text" placeholder="Search Twitter" />
          </div>
        <HandleTrends trend={dataTrends} />
        <Followings Follows={tweets}/>
        <Footer />
       
      </div>
    );
  }
  
  export default Trends;