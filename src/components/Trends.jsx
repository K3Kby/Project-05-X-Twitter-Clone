import SearchTwitter from "..//images/IconesTrends/SearchTwitter.svg";
import HandleTrends from "./HandleTrends";
import { dataTrends } from "..//Utiles/DataTrends";
import Followings from ".//Followings";
import { dataTweets } from "..//Utiles/DataTweets";
import Footer from "./Footer";
function Trends (){
    return (
        <div className="trends">
          <div className="input-search">
            <img className="search" src={SearchTwitter} alt="" />
            <input className="searchTwit" type="text" placeholder="Search Twitter" />
          </div>
        <HandleTrends trend={dataTrends} />
        <Followings Follows={dataTweets}/>
        <Footer />
       
      </div>
    );
  }
  
  export default Trends;